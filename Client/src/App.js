import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route , useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
const [character , setCharacters] = useState([]);
const location = useLocation();
const [access, setAccess]= useState(false);

const navigate = useNavigate();

 async function  login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';

   let respuesta =await axios(URL + `?email=${email}&password=${password}`)
   let  {data} = respuesta;
   const { access } = data;
   setAccess(data);
   access && navigate('/home');
 
};

useEffect(() => {
   !access && navigate('/');
 }, [access]);

async function onSearch(id) {
   try {
      let response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      let {data} = response;

      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }

   } catch (error) {
      console.log(error)
   }
};


async function randomHandler() {
   let haveIt = [];
   //Generate random number
   let random = (Math.random() * 826).toFixed();

   //Coerce to number by boxing
   random = Number(random);

   if (!haveIt.includes(random)) {
     haveIt.push(random);

     try {
      let response = await axios(`http://localhost:3001/rickandmorty/character/${random}`)
      let {data} = response;

      if (data.name) {
       setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("No hay personajes con ese ID");
      }
      
     } catch (error) {
      console.log(error);
     };
   };
 }; 

const onClose = (id)=>{
   setCharacters(
      character.filter((char)=>{
         return char.id !== Number(id)
      })
   )
};

   return (
   <div className='App'>
      <header className='App-header'>
      {
         location.pathname !== "/"
         ?<Nav onSearch={onSearch} random={randomHandler}/>
         : null
      }
      <Routes>
        
        <Route path='/' element={<Form login={login} />}/> 
        <Route path='/home' element={<Cards characters={character} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      
      </header>

   </div>
   );
}

export default App;

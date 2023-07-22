
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {connect} from "react-redux"
import { useState, useEffect } from "react";

const Card=({
   id,
   name, 
   status, 
   species, 
   gender, 
   origin, 
   image,
   onClose,
   addFav ,
   removeFav, 
   myFavorites
})=> {
   const [isFav ,setIsFav]= useState(false);

   const handleFavorite = ()=>{
      isFav ? removeFav(id) 
      : addFav({id, name, status, species, gender, origin, image,onClose})
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className='cards'>
           {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
      }
    
         <Link to={`/detail/${id}`} >
        
          
         <div className='face front'>
            <img src= {image} alt='' />
            <h2>Id: {id}</h2>
            
         </div>     
         <div className='face back'>
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Gender: {gender}</h2>
  
         </div>
         </Link>
         {
            onClose ?(<button onClick={()=>{onClose(id)}}>Close</button>)
            :null
         }
        
       </div>
   );
}

const mapDispatchToProps = (dispatch)=>{
   return{
      addFav:(character) => dispatch (addFav(character)),
      removeFav:(id) => dispatch (removeFav(id))
   }
};

const mapStateToProps =(state)=>{
   return {
      myFavorites: state.myFavorites
   }
};
export default connect(mapStateToProps, mapDispatchToProps) (Card);
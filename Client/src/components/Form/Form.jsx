import { useState } from "react";
import style from "./Form.module.css"
import validation from "../../validation";
// import img from "../../img/loguito.png"

const Form = ({login}) =>{
    const [userData, setUserData]=useState({
        email:"",
        password:""
    });

    const [errors ,setErrors]= useState({});

    const handleChange = (event) => {
        setErrors(validation({...userData,[event.target.name]: event.target.value }))
        setUserData({ ...userData,[event.target.name]: event.target.value,})
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
    }; 

    return (
        <form  className={style.contenedor}>

        <div className={style.hijo}>
            {/* <img src={img} alt="logo" /> */}
            <label  className={style.labels} htmlFor="email">Email:</label>
            <input className={style.inputs} onChange={handleChange} type="email" name="email" value={userData.email}/>
             {errors.e1 ? (<p>{errors.e1}</p>)
             : errors.e2 ? (<p>{errors.e2}</p>) 
             : (<p>{errors.e3}</p>)
        }   <label className={style.labels} htmlFor="password">Password</label>
            <input className={style.inputs} onChange={handleChange} type="password" name="password" value={userData.password} />
        {
             errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)
        }
            
            <button className={style.button} onClick={handleSubmit} type="submit">Submit</button>   
        </div>
           
           
        
        </form>
    );
}
export default Form;
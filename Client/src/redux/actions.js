import { ADD_FAV , REMOVE_FAV, FILTER, ORDER}from "./action_type"
import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async function(dispatch){
      let response = await axios.post(endpoint, character)
      let {data} = response
      return dispatch({
               type: ADD_FAV,
               payload: data,
      });
   };
};

// ACTION | removeFav
export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async function(dispatch){
      try {
         let response = await axios.delete(endpoint)
         let {data} = response;
         return dispatch({
            type: REMOVE_FAV,
             payload: data,
         });

      } catch (error) {
         console.log(error);
      }
   }
   // return (dispatch) => {
   //    axios.delete(endpoint).then(({ data }) => {
   //       return dispatch({
   //          type: REMOVE_FAV,
   //          payload: data,
   //    });
   //    });
   // };
};

export const filterCards = (gender)=>{
   return {
       type: FILTER,
       payload: gender
   }
};

export const orderCards= (order)=>{
   return{
       type:ORDER,
       payload: order
   }
};
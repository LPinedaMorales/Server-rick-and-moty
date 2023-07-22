import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from "./action_type"

const initialState = {
    myFavorites: [],
    allCharacters:[]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_FAV:
      return { ...state,
         myFavorites: action.payload, 
        allCharacters: action.payload 
      };
      
        case REMOVE_FAV:
        return {
           ...state,
            myFavorites: action.payload
           };

      case FILTER:
        const allCharactersFilter = state.allCharacters.filter(
        (char)=>char.gender === action.payload)
        return{
          ...state,
          myFavorites: allCharactersFilter,
        };

      case ORDER:
        const allcharFav=[...state.allCharacters]
        return{
          ...state,
          myFavorites: 
          action.payload === "A" 
          ?allcharFav.sort((a, b)=> a.id - b.id ):
          allcharFav.sort((a, b)=> b.id - a.id)
        }

      default:
        return { ...state };
      }
    };
  
  export default reducer;
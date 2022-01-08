import * as api from '../api';


// export const actionCreators = {
//   addToList: data => ({ type: "ADD_TO_LIST", payload: data }),
//   addToBasket: data => ({ type: "ADD_TO_BASKET", payload: data }),
//   removeItem: data => ({ type: "REMOVE_ITEM", payload: data }),
//   clearItems: () => ({ type: "CLEAR_ITEMS" })
// };


export const getNotes =() =>async(dispatch) => {
    try{

      const {data}=await api.fetchNotes();
      dispatch({type:'FETCH_ALL',payload:data});

    }catch(error){
      console.log(error.message);

    }

}

export const createNote =(note)=>async(dispatch) => {

    try{
      const {data}=await api.createNote(note);
      dispatch({type:'CREATE',payload:data});

    }catch(error){
      console.log(error.message);

    }


}
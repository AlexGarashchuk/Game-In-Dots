import { ADD_USER_NAME } from "../Actions";

const initialState = {
  user: [],
  mode: '',
  date: '',
  active: false
};

function rootReducer(state = initialState, action){
  debugger
  switch(action.type){
    case ADD_USER_NAME:

      debugger
      return{
        ...state,
        user: state.user.concat(action.payload.userName),
        mode: state.mode.concat(action.payload.mode),
        date: state.date.concat(action.payload),
        active: true
      }

  default:
    return state;
  };
}

export default rootReducer;


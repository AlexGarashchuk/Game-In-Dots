import { ADD_USER_NAME } from "../Actions";

const initialState = {
  user: [],
  mode: '',
  date: '',
  active: false,
  delay: 1000
};

function rootReducer(state = initialState, action){
  switch(action.type){
    case ADD_USER_NAME:
      return{
        ...state,
        user: state.user.concat(action.payload.userName),
        mode: state.mode.concat(action.payload.mode),
        date: action.payload,
        delay: action.payload.data.easyMode.delay,
        active: true
      }

  default:
    return state;
  };
}

export default rootReducer;


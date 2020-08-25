import { ADD_USER_NAME, GET_USER_POINT, GET_COMPUTER_POINT } from "../Actions";

const initialState = {
  user: [],
  field: '',
  date: '',
  active: false,
  delay: 5000,
  userPoint: 0,
  computerPoint: 0,
};

function rootReducer(state = initialState, action){
  switch(action.type){
   
    case ADD_USER_NAME:
      return{
        ...state,
        user: state.user.concat(action.payload.userName),
        field: action.payload.mode.field,
        date: action.payload,
        delay: action.payload.mode.delay,
        active: true
      }
      case GET_USER_POINT:
       
        return{
          ...state,
          userPoint: action.payload.userPoint,
        }
        case GET_COMPUTER_POINT:
      
        return{
          ...state,
          computerPoint: action.payload.computerPoint,
        }

  default:
    return state;
  };
}

export default rootReducer;


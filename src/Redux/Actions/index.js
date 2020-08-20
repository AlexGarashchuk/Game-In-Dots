export const ADD_USER_NAME = 'ADD_USER_NAME';
export const ADD_DATA_TIME = 'ADD_DATA_TIME';
export const ADD_MODE = 'ADD_MODE';


export function addUserName(payload){
  return{
    type: ADD_USER_NAME, payload
  }
}

export function addDataTime(payload){
  return{
    type: ADD_DATA_TIME, payload
  }
}

export function addMode(payload){
  return{
    type: ADD_MODE, payload
  }
}
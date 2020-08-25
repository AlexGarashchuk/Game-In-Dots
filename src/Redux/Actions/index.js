export const ADD_USER_NAME = 'ADD_USER_NAME';
export const ADD_DATA_TIME = 'ADD_DATA_TIME';
export const ADD_MODE = 'ADD_MODE';
export const GET_USER_POINT = 'GET_USER_POINT';
export const GET_COMPUTER_POINT = 'GET_COMPUTER_POINT'


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

export function getUserPoint(payload){
  return{
    type: GET_USER_POINT, payload
  }
}
export function getComputerPoint(payload){
  return{
    type: GET_COMPUTER_POINT, payload
  }
}
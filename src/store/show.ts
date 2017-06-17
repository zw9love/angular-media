import { ActionReducer, Action } from '@ngrx/store';

// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
// export const RESET = 'RESET';

export function showReducer(state = 0, action){

  let {type, value} = action

  switch (type) {
    case 'setShowData':
      state = value
      return state;
    default:
      return state;
  }
};

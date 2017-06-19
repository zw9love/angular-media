import { ActionReducer, Action } from '@ngrx/store';

export function showDataReducer(state = 0, action){

  let {type, value} = action

  switch (type) {
    case 'setShowData':
      state = value
      return state;
    default:
      return state;
  }
}

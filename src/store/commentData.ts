import { ActionReducer, Action } from '@ngrx/store';

export function commentDataReducer(state = 0, action){

  let {type, value} = action

  switch (type) {
    case 'setCommentData':
      state = value
      return state;
    default:
      return state;
  }
}

export function shadowReducer(state = {}, action){

  let {type, value} = action

  switch (type) {
    case 'setShadow':
      state = value
      return state;
    default:
      return state;
  }
}

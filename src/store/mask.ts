export function maskReducer(state = {}, action){

  let {type, value} = action

  switch (type) {
    case 'setMask':
      state = value
      return state;
    default:
      return state;
  }
}

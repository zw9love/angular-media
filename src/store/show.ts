
export function showReducer(state = {}, action){

  let {type, value} = action

  switch (type) {
    case 'setShow':
      state = value
      return state;
    default:
      return state;
  }
}

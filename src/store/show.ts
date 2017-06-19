
export function showReducer(state = null, action){

  let {type, value} = action

  switch (type) {
    case 'setShow':
      state = value
      return state;
    default:
      return state;
  }
}

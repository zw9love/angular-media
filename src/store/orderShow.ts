export function orderShowReducer(state = {}, action){

  let {type, value} = action

  switch (type) {
    case 'setOrderShow':
      state = value
      return state;
    default:
      return state;
  }
}

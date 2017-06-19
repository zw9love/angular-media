export function maskLockReducer(state = false, action){

  let {type, value} = action

  switch (type) {
    case 'setMaskLock':
      state = value
      return state;
    default:
      return state;
  }
}

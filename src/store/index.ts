/**
 * Created by admin on 2017/7/3.
 */
function commentDataReducer(state = 0, action) {

  let {type, value} = action

  switch (type) {
    case 'setCommentData':
      state = value
      return state;
    default:
      return state;
  }
}

function homeReducer(state = {}, action) {

  let {type, value} = action

  switch (type) {
    case 'setHome':
      state = value
      return state;
    default:
      return state;
  }
}

function maskReducer(state = {}, action) {

  let {type, value} = action

  switch (type) {
    case 'setMask':
      state = value
      return state;
    default:
      return state;
  }
}

function maskLockReducer(state = false, action) {

  let {type, value} = action

  switch (type) {
    case 'setMaskLock':
      state = value
      return state;
    default:
      return state;
  }
}

function orderShowReducer(state = {}, action) {

  let {type, value} = action

  switch (type) {
    case 'setOrderShow':
      state = value
      return state;
    default:
      return state;
  }
}

function shadowReducer(state = {}, action) {

  let {type, value} = action

  switch (type) {
    case 'setShadow':
      state = value
      return state;
    default:
      return state;
  }
}

function showReducer(state = null, action) {

  let {type, value} = action

  switch (type) {
    case 'setShow':
      state = value
      return state;
    default:
      return state;
  }
}

function showDataReducer(state = 0, action) {

  let {type, value} = action

  switch (type) {
    case 'setShowData':
      state = value
      return state;
    default:
      return state;
  }
}

export let store = {
  show: showReducer,
  showData: showDataReducer,
  shadow: shadowReducer,
  mask: maskReducer,
  orderShow: orderShowReducer,
  maskLock: maskLockReducer,
  commentData: commentDataReducer,
  home: homeReducer
}



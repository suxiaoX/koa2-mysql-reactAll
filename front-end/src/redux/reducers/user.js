import * as type from '../constants';

const initState = {
  isFetching: true,
  isLogin: false,
}
const userInfo = (state = initState, action) => {
  switch (action.type) {
    case type.REQUEST_USER:
      return state;
    case type.SUCCESS_USER:
      let data;
      if (action.data != null) {
        data = action.data;
      }
      return !data.code ? { ...state, isFetching: false, isLogin: true, data: data } : { ...state, isFetching: false, isLogin: false, data: data }
    case type.FAILURE_USER:
      return { ...initState }
    default:
      return state
  }
}

export default userInfo;
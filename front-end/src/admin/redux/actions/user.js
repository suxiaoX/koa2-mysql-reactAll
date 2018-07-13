import * as type from '../constants/index';
import user from '../../api/user';

const fetchRequset = () => ({
  type: type.REQUEST_USER
})

const fetchSuccess = (data) => ({
  type: type.SUCCESS_USER,
  data
})

const fetchFailure = (error) => ({
  type: type.FAILURE_USER,
  error
})

export const getUserInfo = (params) => async (dispatch) => {
  try {
    await dispatch(fetchRequset());
    const data = await user.getUserInfo(params);
    await dispatch(fetchSuccess(data));
  } catch(err) {
    dispatch(fetchFailure(err));
  }
}

export const postLogin = (params) => async (dispatch) => {
  try {
    await dispatch(fetchRequset());
    const data = await user.login(params);
    await dispatch(fetchSuccess(data));
    return data;
  } catch(err) {
    dispatch(fetchFailure(err));
  }
}

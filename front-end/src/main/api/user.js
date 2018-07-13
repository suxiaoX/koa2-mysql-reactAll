import { requestPost, requestGet } from '../until/ajax';

export default {
  register(params) {
    const url = '/api/user/register';
    return requestPost(url, params).then(res => {
      return Promise.resolve(res.data);
    })
  },

  login(params) {
    const url = '/api/user/login';
    return requestPost(url, params).then(res => {
      return Promise.resolve(res.data);
    })
  },

  logout() {
    const url = '/api/user/logout';
    return requestPost(url).then(res => {
      return Promise.resolve(res.data);
    })
  },

  getUserInfo(params) {
    const url = '/api/user/info';
    return requestGet(url, params).then(res => {
      return Promise.resolve(res.data);
    })
  }
}
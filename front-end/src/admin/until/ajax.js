import axios from 'axios';
import { message } from 'antd';

axios.interceptors.request.use(config => {
  return config;
}, err => {
  message.error('请求超时');
  return Promise.resolve(err);
});

axios.interceptors.response.use(data => {
  if (data.status && data.status === 200 && data.data.status === 'error') {
    return message.error(`${data.data.msg}`);
  }
  return data;
}, err => {
  if (err.response.status === 504 || err.response.status === 404) {
    message.error('服务器错误');
  } else if (err.response.status === 403) {
    message.error('权限不足,请联系管理员!');
  } else if (err.response.status === 401 && err.response.config.url === '/api/user/info') {
    console.error(err.response);
    // message.error('请登录');
  } else {
    message.error('未知错误!');
  }
  return Promise.resolve(err);
});

let base = '';

export const requestPost = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export const requestGet = (url, params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: {
      ...params
    }
  });
}

export const requestUpload = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export const requestPut = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export const requestDelete = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  });
}
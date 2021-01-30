import axios from 'axios';
let authToken = localStorage.getItem('token');
let idToken = localStorage.getItem('idToken');
let config = {
  baseURL: process.env.REACT_APP_API_URL,
};

if (authToken && idToken) {
  config['headers'] = {
    Authorization: `Bearer ${authToken}`,
  };
}
const Http = axios.create(config);

Http.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
Http.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      headers: response.headers,
    };
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAuthLogic();
      Http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return Http(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refreshAuthLogic = () => {
  let refreshToken = localStorage.getItem('refreshToken');

  return Http.get(
    `${process.env.REACT_APP_API_URL}/oauth2/refresh_token?refresh_token=${refreshToken}`
  ).then((result) => {
    const bearer = result.data.access_token;
    const refreshToken = result.data.refresh_token;

    HttpConfig.setAuthorization(Http, bearer);
    HttpConfig.setRefreshToken(Http, refreshToken);

    localStorage.setItem('token', bearer);
    localStorage.setItem('refreshToken', refreshToken);
    return bearer;
  });
};

const HttpConfig = {
  /**
   *
   * @param {Http Instance} Http
   * @param {string} token
   */
  setAuthorization(Http, token) {
    Http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
};

export { Http, HttpConfig };

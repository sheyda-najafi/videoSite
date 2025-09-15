import config from './global.js';
const fetchApi = {
  videoListToken: (url) => {
    return config.fetchHandle(url);
  },
};
export default fetchApi;

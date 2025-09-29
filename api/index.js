import config from './global.js';
const Api = {
  // ====================
  // backupInsert: (body) => {
  //   return config.axiosHandle().post('v1/backup', body);
  // },
  // backupRestore: (id, body) => {
  //   return config.axiosHandle().get(`v1/backup/restore/${id}`, body);
  // },
  // backupList: (params) => {
  //   return config.axiosHandle().get('v1/backup', params);
  // },
  // backupDelete: (id, body) => {
  //   return config.axiosHandle().delete(`v1/backup/${id}`, body);
  // },
  // ========
  checkLogin: (body) => {
    return config.axiosHandle().get('v0/check-login', body);
  },
  uploadImage: (body, myconfig = {}, query = '') => {
    return config.axiosHandle().post('v0/file/upload/images' + query, body, { ...myconfig });
  },
};
export default Api;

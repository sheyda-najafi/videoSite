import config, { config2 } from './global.js';
const Api = {
  // ====================
  backupInsert: (body) => {
    return config2.axiosHandle().post('v1/backup', body);
  },
  backupRestore: (id, body) => {
    return config2.axiosHandle().get(`v1/backup/restore/${id}`, body);
  },
  backupList: (params) => {
    return config2.axiosHandle().get('v1/backup', params);
  },
  backupDelete: (id, body) => {
    return config2.axiosHandle().delete(`v1/backup/${id}`, body);
  },
  // ========
};
export default Api;

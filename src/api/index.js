import axios from 'axios';
import store from '../store';

const apiClient = axios.create({
  baseURL: 'https://iapitest.eva.guru',
  headers: {
    'Content-Type': 'application/json'
  }
});
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('eva_token') ? localStorage.getItem('eva_token') : store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });
  

export default {
  login(credentials) {
    return apiClient.post('/oauth/token', credentials);
    },
  setUser(credentials) {
    return apiClient.post('/user/user-information', credentials);
  },
  setGraphData(val){
    return apiClient.post('/data/daily-sales-overview', val);
  },
  setCompareItems(val) {
    return apiClient.post('/data/daily-sales-sku-list',val)
  },
  setCompareItemsWithRefund(val) {
    return apiClient.post('/data/get-sku-refund-rate',val)
  }
};

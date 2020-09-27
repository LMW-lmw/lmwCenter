import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
  //axios的拦截器
  //interceptors -->拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  //响应式拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
      console.log(err);
    })
  return instance(config)
}
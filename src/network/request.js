import axios from 'axios'
import {showFullScreenLoading,tryHideFullScreenLoading} from "./loading";
import {Loading, Message} from 'element-ui'

export function request(config) {
  let needLoadingRequestCount = 0
  const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
  //axios的拦截器
  //interceptors -->拦截器
  instance.interceptors.request.use(config => {
    showFullScreenLoading()
    return config
  }, err => {
    console.log(err);
  })
  //响应式拦截
  instance.interceptors.response.use(res => {
    tryHideFullScreenLoading()
    return res.data
  },err => {
      console.log(err);
    })
  return instance(config)
}
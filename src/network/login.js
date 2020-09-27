import {request} from "./request";

export function login(account,password) {
  return request({
    url: '/user/userlogin.do',
    type: 'GET',
    params: {
      account,
      password
    }
  })
}
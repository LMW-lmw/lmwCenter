import {request} from "../request";

export function getMyClass(account) {
  return request({
    url: '/app/getMyItemList.do',
    params: {
      account
    }
  })
}
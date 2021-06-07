import {request} from "../request";

export function getOrder(pageIndex) {
  return request({
    url: '/app/getMyOrderList.do',
    params: {
      pageIndex
    }
  })
}
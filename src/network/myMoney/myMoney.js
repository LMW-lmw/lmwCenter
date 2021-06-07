import {request} from "../request";

export function getRedPack() {
  return request({
    url: '/jzCoupon/getRedEnvelopePage.do',
  })
}

export function getVail(dlId) {
  return request({
    url: '/jzCoupon/getValidJzCouponByStuId.do',
    params: {
      dlId
    }
  })
}

export function getLost(dlId) {
  return request({
    url: '/jzCoupon/getLoseJzCouponByStuId.do',
    params: {
      dlId
    }
  })
}
import {request} from "../request";

export function getShopCars(abd) {
  return request({
    url: '/app/getShoppingCartDetial.do',
    params: {
      abd
    }
  })
}

export function getRedPacket(abc) {
  return request({
    url: '/jzCoupon/getSutUserRedEnvelopeSum.do',
    params: {
      abc
    }
  })
}
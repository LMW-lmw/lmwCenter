import {request} from "../request";

export function getShopCars(abd) {
  return request({
    url: '/app/getShoppingCartDetial.do',
    params: {
      abd
    }
  })
}
import {request} from "./request";

export function getShopCar(page,limit,dlId) {
  return request({
    url: '/app/getShoppingCartDetial.do',
    params: {
      page,
      limit,
      dlId
    }
  })
}
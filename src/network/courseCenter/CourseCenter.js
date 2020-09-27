import {request} from "../request";

export function getAllCourse(courseId,dlId) {
  return request({
    url: '/app/getItemListByBanXingTypeNoLogin.do',
    params: {
      courseId,
      dlId
    }
  })
}
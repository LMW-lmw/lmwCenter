import {request} from "../request";

export function getVideos(courseId) {
  return request({
    url: '/app/getVideoTeachListNoLogin.do',
    // getItemsCourseByCourseIdNoLogin
    params: {
      courseId
    }
  })
}

export function getFreeClass(courseId) {
  return request({
    url: '/course/getItemsCourseByCourseIdNoLogin.do',
    params: {
      courseId
    }
  })
}

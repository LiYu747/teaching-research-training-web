import { http } from '@/utils/http'

export const getTest = (params) => {
  return http.request(
    'get',
    '/app/activity/findAll',
    { params },
    {
      isNeedFullRes: false, // 是否需要返回完整的响应对象
      isShowLoading: true, // 是否显示loading
      isNeedToken: true, // 是否需要token
    }
  )
}

export const WorkRfindAll = (params) => {
  return http.request(
    'get',
    '/teacher/workRoomDynamically/findAll',
    { params },
    {
      isNeedFullRes: false, // 是否需要返回完整的响应对象
      isShowLoading: false, // 是否显示loading
      isNeedToken: true, // 是否需要token
    }
  )
}
//全部活动

export const TeachingfindAll = (params) => {
  return http.request(
    'get',
    '/teacher/teachingTraining/findAll',
    { params },
    {
      isNeedFullRes: false, // 是否需要返回完整的响应对象
      isShowLoading: false, // 是否显示loading
      isNeedToken: true, // 是否需要token
    }
  )
}

//最新两条

export const TeachingGetTwo = (params) => {
  return http.request(
    'get',
    '/teacher/teachingTraining/findAllGetTwo',
    { params },
    {
      isNeedFullRes: false, // 是否需要返回完整的响应对象
      isShowLoading: false, // 是否显示loading
      isNeedToken: true, // 是否需要token
    }
  )
}

//我参与的活动
export const TeachingmyAct = (params) => {
  return http.request(
    'get',
    '/teacher/teachingTraining/myActivities',
    { params },
    {
      isNeedFullRes: false, // 是否需要返回完整的响应对象
      isShowLoading: false, // 是否显示loading
      isNeedToken: true, // 是否需要token
    }
  )
}
//登录
export const Commonlogin = (data) => {
  return http.request(
    'post',
    '/common/user/login',
    { data },
    {
      isNeedFullRes: false, // 是否需要返回完整的响应对象
      isShowLoading: false, // 是否显示loading
      isNeedToken: false, // 是否需要token
    }
  )
}

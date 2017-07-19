export default class AppConfig {
  install (Vue, options) {
    // 
    let basePath = 'http://192.168.1.108:9203'
    let apis={
      // 登陆接口
      login:'/person/login',
      // 注册接口
      register:'/person/register',
      // 最新版本接口
      lastest:'/version/lastest',
      // 反馈接口
      suggest:'/app-suggest/1',
      // 登出接口
      logout:'/person/logout',
      // 信息公告接口
      message:'/message',
      // 修改密码接口
      changePassword:'/person/change-password',
      // 修改信息接口
      updateMyself:'/person/update-myself',
      // 获取地区接口
      area:'/area',
      // 获取字典接口
      dictionary:'/dictionary/option'

    }
    // 1. 添加全局方法或属性
    Vue.appConstant = () => {
      return {
        'appPath': ''
      }
    }
    Vue.myGlobalMethod = (url) => {
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {})
    // 3. 添加实例方法
    Vue.prototype.$Api = (url) => {
      // return window.location.origin + '/readapi?uri=' + url
      return basePath + url
    }
    Vue.prototype.$Apis = (key) => {
      // return window.location.origin + '/readapi?uri=' + url
      return basePath+apis[key]
    }
    
  }
}
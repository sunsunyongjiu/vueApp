import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import login from '@/pages/login/login'
import IndexHome from '@/pages/index/index-IndexHome'
import business from '@/pages/index/index-business'
import message from '@/pages/index/index-message'
import info from '@/pages/index/index-info'
import about from '@/pages/about/about'
import feedback from '@/pages/feedback/feedback'
import messagelist from '@/pages/message/message-list'
import password from '@/pages/info/info-password'
import myInfo from '@/pages/info/my-info'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

Vue.use(Router)
// name为页面跳转后的页面标题
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: login,
    },
    {
      path: '/messagelist',
      name: 'messagelist',
      component: messagelist,
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/password',
      name: 'password',
      component: password,
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback,
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      redirect: '/Index/home',
      children: [
       
        { name: '首页',path: 'home', component: IndexHome },
        
        { name: '业务',path: 'business', component: business },
        
        { name: '信息',path: 'message', component: message },

        { name: '我的',path: 'info', component: info }
      ]
    },
    {
      path: '*',
      name: '',
      redirect: '/login'
    },
  ]
})
// 页面跳转后修改网页title
router.beforeEach((to, from, next) => {
  Vue.$vux.loading.hide()
  document.title = to.name
  next()
})
export default router;

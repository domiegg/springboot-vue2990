import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import xiaoshuo from '@/views/modules/xiaoshuo/list'
    import xiaoshuoCollection from '@/views/modules/xiaoshuoCollection/list'
    import xiaoshuoLiuyan from '@/views/modules/xiaoshuoLiuyan/list'
    import xiaoshuoOrder from '@/views/modules/xiaoshuoOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuedujilu from '@/views/modules/yuedujilu/list'
    import zhangjie from '@/views/modules/zhangjie/list'
    import zuozhe from '@/views/modules/zuozhe/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryXiaoshuo from '@/views/modules/dictionaryXiaoshuo/list'
    import dictionaryXiaoshuoCollection from '@/views/modules/dictionaryXiaoshuoCollection/list'
    import dictionaryZhangjieCollection from '@/views/modules/dictionaryZhangjieCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryXiaoshuo',
        name: '文学信息类型',
        component: dictionaryXiaoshuo
    }
    ,{
        path: '/dictionaryXiaoshuoCollection',
        name: '收藏表类型',
        component: dictionaryXiaoshuoCollection
    }
    ,{
        path: '/dictionaryZhangjieCollection',
        name: '收藏表类型',
        component: dictionaryZhangjieCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/xiaoshuo',
        name: '文学',
        component: xiaoshuo
      }
    ,{
        path: '/xiaoshuoCollection',
        name: '书架',
        component: xiaoshuoCollection
      }
    ,{
        path: '/xiaoshuoLiuyan',
        name: '文学留言',
        component: xiaoshuoLiuyan
      }
    ,{
        path: '/xiaoshuoOrder',
        name: '文学购买',
        component: xiaoshuoOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuedujilu',
        name: '阅读记录管理',
        component: yuedujilu
      }
    ,{
        path: '/zhangjie',
        name: '章节',
        component: zhangjie
      }
    ,{
        path: '/zuozhe',
        name: '作者',
        component: zuozhe
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

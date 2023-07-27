import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // {
  //   name: 'notFound',
  //   path: '/:path(.*)+',
  //   redirect: {
  //     name: 'goods',
  //   },
  // },
  {
    name: '/',
    path: '/',
    component: () => import('@/views/index'),
    meta: {
      title: '主页',
      // kepAlive:true
      keepAlive: true,
    },
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/views/user'),
    meta: {
      title: '会员中心',
    },
  },
  {
    name: 'list',
    path: '/list',
    component: () => import('@/views/teachingstudio/list'),
    meta: {
      title: '名师工作室列表',
    }
  },
  {
    name: 'tolist',
    path: '/tolist',
    component: () => import('@/views/teachingstudio/tolist'),
    meta: {
      title: '名师工作室列表详情',
      
    }
  },
  {
    name: 'activity',
    path: '/activity',
    component: () => import('@/views/activity'),
    meta: {
      title: '我参与的活动',
    
    }
  },
  {
    name: 'Home',
    path: '/Home',
    component: () => import('@/views/components/Home'),
    meta: {
      title: '我参与的活动',
    }
  },
  {
    name: 'dome',
    path: '/dome',
    component: () => import('@/views/dome'),
    meta: {
      title: '测试',
    }
  },
  {
    name: 'dome1',
    path: '/dome1',
    component: () => import('@/views/dome1'),
    meta: {
      title: '测试',
    }
  },
  {
    name: 'teaching',
    path: '/teaching',
    component: () => import('@/views/teaching/index'),
    meta: {
      title: '教研活动',
    
    }
  },
  {
    name: 'case',
    path: '/case',
    component: () => import('@/views/teaching/case'),
    meta: {
      title: '案例方案',
    }
  },
  
  {
    name: 'StudioDetails',
    path: '/StudioDetails',
    component: () => import('@/views/teachingstudio/StudioDetails'),
    meta: {
      title: '工作室详情页',
     
    }
  },
  {
    name: 'ResearchActivity',
    path: '/ResearchActivity',
    component: () => import('@/views/ResearchActivity'),
    meta: {
      title: '教研案例列表',
    
    }
  },
  {
    name: 'ResearchDetails',
    path: '/ResearchDetails',
    component: () => import('@/views/ResearchDetails'),
    meta: {
      title: '教研案例',
    
    }
  },
 
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  document.querySelector("#main-con").scrollTop = 0
  // console.log(document.querySelector(".main-con"));
  next();
});


export { router };
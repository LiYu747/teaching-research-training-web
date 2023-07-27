import './public-path'

import { createApp } from "vue";
import App from "./App.vue";
import "uno.css";
import "./styles/main.css";
// import router from './router'
import { router } from "./router";
import store from "./store";
import { setLocalStorage } from "./utils/index";
import "amfe-flexible";
import {  Commonlogin  } from '../src/api/admin'
// router.afterEach((to, from, next) => {    
//   // chrome
//   document.body.scrollTop = 0
//   // firefox
//   document.documentElement.scrollTop = 0
//   // safari
//   window.pageYOffset = 0
  
// })

// function handleMicroData() {
//   if (window.__MICRO_APP_ENVIRONMENT__) {
//     // 主动获取基座下发的数据
//     if (window.microApp) {
//       let data = window.microApp.getData();
//       console.log('microApp.getData()==',data);
//         if(data.studentInfo){
//           let uploadToken = data.studentInfo.xAuthToken; 
//           setLocalStorage("uploadToken", uploadToken);
//         } 
//         else if(data.userInfo){
//           let uploadToken = data.userInfo.xAuthToken; 
//           setLocalStorage("uploadToken", uploadToken);
//         }  
      
//     }
//     return
//   }
 
//   let uploadToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwib3JpZ2luIjowLCJpZCI6IjAxMjAzMDM2NDI0NDYwMDg2NzI2Iiwibmlja05hbWUiOiLkv57lpo3popYiLCJidWZmZXJUaW1lIjo4NjQwMCwiZXhwIjoxNjg2MzkwMTAyLCJpc3MiOiJyZCIsIm5iZiI6MTY4NTc4NDMwMn0.-2Fled6YfxA5iazb3Lwv4Fbf6VdmwubYly4aRFScVos"
//   setLocalStorage('uploadToken',uploadToken)
// }
// handleMicroData(); 

createApp(App).use(store).use(router).mount("#app");

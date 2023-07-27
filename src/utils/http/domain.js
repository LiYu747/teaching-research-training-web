/**
 * 接口域名的管理
 * @param {String} apiServer [api服务器]
 * @param {String} otherServer [其他服务器]
 */

  const domainLsit = [
    {
      //http://10.0.30.109:8370
      apiServer: "http://10.0.30.183:8330", //开发服务 0
      otherServer: "https://api.ebag-test.readboy.com/education-cube", //开发服务器 1
    },
    // 正式服
    {
      apiServer: "http://10.0.30.109:8320/", //开发服务 0
      otherServer: "http://10.0.30.109:8320/", //开发服务器 1 
    },
    // 测试服
    {
      apiServer: "https://trts.styduinxx.boran-tech.com/", //测试服务 0
      otherServer: "https://api.ebag-test.readboy.com/education-cube", //测试服务器 1
    },
  ];
  const ServerNumber = process.env.VUE_APP_SERVER_ID
    ? process.env.VUE_APP_SERVER_ID
    : 0;
// 地址对象
export const baseUrl = domainLsit[ServerNumber];

// api接口
export const apiServer = baseUrl.apiServer;

export default baseUrl;

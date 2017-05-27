import Request from './utils/request';
import Logs from './utils/logs';
import Tools from './utils/tools';

App({
  debug:true,
  Request: false,
  Logs: false,
  Tools: new Tools,
  // 初始化小程序
  onLaunch(options) {
    this.Logs = new Logs;
    this.Request = new Request;
    // 检测当前用户登录态是否有效
  },
  onShow(){
    this.sign();
  },
  // 检查小程序session
  sign(){
    this.Logs.checkSession()
    .then(data=>{
      var tokey = this.Logs.get_tokey();
      if(tokey === false){
        this.login();
      }else{
        this.Logs.redirectTo('/pages/index/index');
      }
    })
    .catch(data =>{
      this.login();
    });
  },
  // 重新获取tokey
  login(){
    // session过期
    this.Logs.login({})
      .then(data => {
        this.Request.signUp({
          code: data.code
        }).then(result => {
          // 获取tokey失败
          if (result.code == 0) {
            this.Logs.error(result.msg);
            return false;
          }
          this.Logs.getUserInfo().then(data=>{
            this.globalData.userInfo = data.userInfo;
          });
          // 保存
          this.Logs.set_tokey(result.data.tokey);
          // 跳转到首页
          this.Logs.redirectTo('/pages/index/index');
        }).catch(data => {
        });
      }).catch(data => {
        // 登录接口调用失败..
      });
  },
  // 公共数据
  globalData:{
    userInfo:false
  }
})


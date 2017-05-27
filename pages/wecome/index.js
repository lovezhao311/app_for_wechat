// pages/wecome/index.js
const App = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if (App.globalData.userInfo) {
      this.setData({
        userInfo: App.globalData.userInfo
      });
    } else {
      App.Logs.login({})
      .then(data => {
        App.Logs.getUserInfo().then(user => {
          this.setData({
            userInfo: user.userInfo
          });
        }); 
      }).catch(data => {
        console.log(data);
      });
    }
  }
})
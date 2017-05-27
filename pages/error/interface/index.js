// pages/error/interface/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    error:"接口调用失败!"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      error:options.msg
    });
  },
})
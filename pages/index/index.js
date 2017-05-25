//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // 畅销精选
    best: {
      page:1,
      pagesize:4,
      totalpath: 0,
      lists:[
        {
          name:"高勇之我的种马生活",
          image:"../../images/150.jpg",
          remark:"接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。每一项代表对应页面的..页面的..",
          author_name:"三舍弃",
          tags:["武侠","仙侠"]
        }
      ]
    },
    // 新书强推
    new: {
      page: 1,
      pagesize: 4,
      totalpath: 0,
      lists: []
    },
    // 主编力荐
    recomm: {
      page: 1,
      pagesize: 4,
      totalpath: 0,
      lists: []
    },
    // 经典完本
    end: {
      page: 1,
      pagesize: 4,
      totalpath: 0,
      lists: []
    },
    // banner
    banner: {
      indicatordots: true,
      autoplay:true,
      lists:[
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    }
  },
  // 日志
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
})

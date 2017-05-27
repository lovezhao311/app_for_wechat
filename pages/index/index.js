//index.js
//获取应用实例
const App = getApp()
Page({
  data: {
    // 畅销精选
    best: {
      lists:[]
    },
    // 新书强推
    new: {
      lists: []
    },
    // 主编力荐
    recomm: {
      lists: []
    },
    // 经典完本
    end: {
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
  onShow(){
    App.Request.bookList().then(data => {
      this.setData({
          "best.lists": data.data
      });
    });

    App.Request.bookList().then(data => {
      this.setData({
        "new.lists": data.data
      });
    });

    App.Request.bookList().then(data => {
      this.setData({
        "recomm.lists": data.data
      });
    });

    App.Request.bookList().then(data => {
      this.setData({
        "end.lists": data.data
      });
    });
  }
})

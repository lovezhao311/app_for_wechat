//index.js
//获取应用实例
const App = getApp()
Page({
  data: {
    // 畅销精选
    best: {
      data:[]
    },
    // 新书强推
    new: {
      data: []
    },
    // 主编力荐
    recomm: {
      data: []
    },
    // 经典完本
    end: {
      data: []
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
    App.Request.bookList({
      type:3
    }).then(data => {
      this.setData({
          "best.data": data.data
      });
    });

    App.Request.bookList({
      type: 1
    }).then(data => {
      this.setData({
        "new.data": data.data
      });
    });

    App.Request.bookList({
      type: 2
    }).then(data => {
      this.setData({
        "recomm.data": data.data
      });
    });

    App.Request.bookList({
      end_status:2
    }).then(data => {
      this.setData({
        "end.data": data.data
      });
    });
  }
})

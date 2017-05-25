// pages/read/index.js
const App = getApp();
Page({
  data: {
    chapter:{
      id:0,
      book_id:0,
      name:"加载中...",
      conter:"加载中..."
    },
    page:{
      scrollTop:0
    }
  },
  // 页面加载
  onLoad(option) {
    App.Logs.setNavigationBarTitle({
      "title":"加载中.."
    });
  },
  // 页面显示
  onShow() {

    // App.Request.chapter({

    // }).than(data => {

    // }).catch(data => {

    // });

    var page = App.Logs.get_book_history(this.data.chapter.book_id);
    if (page !== false && page.chapter_id == this.data.chapter.id){
      this.setData({
        "page.scrollTop": page.scroll_top
      });
    }else{
      App.Logs.book_history(this.data.chapter.book_id, this.data.chapter.id, 0);
    }
  },
  // 滚动 
  scroll(e){
    App.Logs.book_history(this.data.chapter.book_id, this.data.chapter.id, e.detail.scrollTop);
  }
});
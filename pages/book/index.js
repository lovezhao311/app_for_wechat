// pages/book/index.js
const App = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    book:{
      id:0,
      name:"--",
      author_name:"--",
      word_count:0,
      remark:"加载中...",
      read:{},
      last_chapter:{
        id:0,
        name:"--"
      },
      tag:[],
      chpaters:[]
    }
  },
  // 页面加载
  onLoad(option){
    this.setData({
      "book.id":option.id
    });
    // 获取书籍数据
    // code ....
    // 获取书籍阅读情况
  },
  // 页面显示
  onShow() {
    this.setData({
      "book.read": App.Logs.get_book_history(this.data.id)
    });

    App.Logs.launch();

    // App.Request.bookList({
    //   id: this.data.book.id
    // });
  },
  // 章节列表排序
  chapter_order(event){
    var chapters = this.data.book.chpaters;
    chapters.reverse();
    this.setData({
      "book.chpaters": chapters
    });
  }
})
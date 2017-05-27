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
      author_id:0,
      author_name:"--",
      word_count:0,
      remark:"加载中...",
      read:{},
      book_chapter_id:0,
      book_chapter_name:'',
      image:"",
      tags:[],
      chpaters:[],
      read:{}
    },
    option:{}
  },
  // 页面加载
  onLoad(option){
    this.setData({
      "option":option
    });
  },
  // 页面显示
  onShow() {
    this.getDetail();
  },
  // 章节列表排序
  chapter_order(event){
    var chapters = this.data.book.chpaters;
    chapters.reverse();
    this.setData({
      "book.chpaters": chapters.data
    });
  },
  // 阅读
  go_read(event){
    var page = App.Logs.get_book_history(this.data.option.id);
    var option = {
      book_id: this.data.option.id,
      type: 'chapter',
      id: 0
    };
    if(page != false){
      option.id = page.chapter_id;
    }

    App.Logs.navigateTo('/pages/read/index', option);
  },
  getDetail(){
    // 书籍资料
    App.Request.bookDetail(this.data.option).then(data => {
      this.setData({
        book: data.data
      });
      this.setData({
        "book.read": App.Logs.get_book_history(this.data.option.id)
      });
    });
    // 章节目录
    App.Request.bookChapter({
      id: this.data.option.id
    }).then(data => {
      this.setData({
        'book.chpaters': data.data
      });
    });
  }
})
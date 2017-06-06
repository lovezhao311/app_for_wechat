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
      chapters:[],
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
    this.hasUpdate();
  },

  // 章节列表排序
  chapter_order(event){
    var chapters = this.data.book.chpaters.data;
    console.log(chapters);
    chapters.reverse();
    this.setData({
      "book.chpaters.data": chapters
    });
  },
  // 阅读
  go_read(event){
    var page = App.Logs.get_book_history(this.data.option.id);
    var option = {
      book_id: this.data.option.id,
      key: 0
    };
    if(page != false){
      option.key = page.key;
    }
    App.Logs.navigateTo('/pages/read/index', option);
  },
  // 获取书籍资料
  getDetail(){
    // 书籍资料
    App.Request.bookDetail(this.data.option).then(result => {
      var data = result.data;
      this.setData({
        book: data
      });
      // 设置阅读记录
      this.setData({
        "book.read": App.Logs.get_book_history(this.data.option.id)
      });
      // 是否有更新
      var cache = App.Logs.get_book(data.id);
      if(cache.book_chapter_id == data.book_chapter_id){
        var chapters = App.Logs.get_book_chapters(data.id);
        this.setData({
          'book.chpaters': chapters
        });
      }else{
        // 保存书籍信息
        App.Logs.set_book(data);

        // 获取章节目录
        App.Request.bookChapter({
          id: data.id
        }).then(e => {
          this.setData({
            'book.chpaters': e.data
          });
          App.Logs.set_book_chapters(data.id, e.data);
        });
      }
    });
  },
  /**
   * 是否有更新
   */
  hasUpdate(){
    App.Request.checkUpdate(this.data.option).then(result => { });
    // 验证书籍是否有更新
  }
})
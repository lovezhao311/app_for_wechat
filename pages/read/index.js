// pages/read/index.js
const App = getApp();
var R_htmlToWxml = require('../../utils/htmlToWxml.js');//引入公共方法

Page({
  data: {
    chapter:{
      id:0,
      book_id:0,
      name:"加载中...",
      content:"加载中..."
    },
    page:{
      scrollTop:0
    },
    option:{}
  },
  // 页面加载
  onLoad(option) {
    this.setData({
      option: option
    });
    
  },
  // 页面显示
  onShow() {
    this.getDetail();
  },
  // 滚动 
  scroll(e){
    App.Logs.book_history(this.data.chapter.book_id, this.data.chapter.id, this.data.chapter.name, e.detail.scrollTop);
  },
  // 下一章
  nextpage(){
    this.setData({
      'option.type': "nextpage",
      'option.id': this.data.chapter.id,
    });
    this.getDetail();
  },
  // 上一章
  lastpage() {
    this.setData({
      'option.type': "lastpage",
      'option.id': this.data.chapter.id,
    });
    this.getDetail();
  },
  // 获取章节内容
  getDetail(){
    App.Logs.showLoading({
      title:'加载中..'
    });
    App.Request.chapterDetail(this.data.option).then(data => {
      this.setDetail(data.data);
      App.Logs.hideToast();
    });
  },
  // 设置章节内容
  setDetail(detail){
    if (detail.content != null) {
      detail.content = R_htmlToWxml.html2json(detail.content);
    } else {
      detail.content = '正在手打中,请稍后刷新..';
    }
    // 设置data
    this.setData({
      chapter: detail
    });
    // 设置标题
    App.Logs.setNavigationBarTitle({
      "title": detail.book_name +'['+ detail.name + ']'
    });
    // 缓存 记录
    var page = App.Logs.get_book_history(this.data.chapter.book_id);
    if (page !== false && page.chapter_id == this.data.chapter.id) {
      this.setData({
        "page.scrollTop": page.scroll_top
      });
    } else {
      App.Logs.book_history(detail.book_id, detail.id, detail.name, 0);
      this.setData({
        "page.scrollTop": 0
      });
    }
  }
});
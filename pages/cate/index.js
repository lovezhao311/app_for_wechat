// pages/cate/index.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasRefesh : false,
    lastPage: false,
    cateLists : [

    ],
    bookList:{
      data:[],
      current_page:0,
      last_page:0,
      per_page:0,
      total:0
    },
    option:{
      id:0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    App.Request.cateList().then(result => {
      this.setData({
        cateLists: result.data
      });
    });
    this.get_detail(0);
  },

  // 点击tags
  tags_book(e){
    var id = e.target.dataset.id;
    this.setData({
      'option.id':id
    });
    this.get_detail(id);
  },

  // 获取数据
  get_detail(id, page = 1, merge=false){
    App.Request.tagsDetail({
      id:id,
      page:page
    }).then(result=>{
      let bookList = this.data.bookList;
      if (merge){
        result.data.data = bookList.data.concat(result.data.data);
      }      
      this.setData({
        bookList: result.data
      });
      this.setData({
        hasRefesh: false
      });
      this.setData({
        lastPage: false
      });
    });
  },

  // 下拉刷新
  load_more: function (e) {
    if (this.data.hasRefesh) {
      return false;
    }
    this.setData({
      hasRefesh:true
    });
    var bookList = this.data.bookList;
    if (bookList.last_page <= bookList.current_page){
      this.setData({
        hasRefesh: false
      });
      this.setData({
        lastPage: true
      });
      return false;
    }
    this.get_detail(this.data.option.id, parseInt(bookList.current_page)+1, true);
  }
})
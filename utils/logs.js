import Service from './service';

class logs extends Service{
  constructor() {
    super()
  }
  // 浏览记录
  history(page, name){
    var logs = this.getStorageSync('history') || [];
    var record = {
      route: page,
      name: name,
      time: Date.now()
    };
    logs.unshift(record);
    this.setStorage({
      key:"history",
      data: logs
    }).then(function(){
    }).catch(function(){  
    });
  }
  // 进入小程序（初始化小程序）
  launch(){
    var logs = this.getStorageSync('launchs') || [];
    logs.unshift(Date.now());
    this.setStorage({
      key: "launchs",
      data: logs
    }).then(data => {
    }).catch(data => {
    });
  }
  // 记录阅读情况
  book_history(book_id, chapter_id, name, scroll_top){
    var key = 'book_history_'+book_id;
    var record = {
      chapter_id: chapter_id,
      name:name,
      scroll_top: scroll_top,
      time: Date.now()
    };
    this.setStorage({
      key: key,
      data: record
    }).then(function () {
    }).catch(function () {
    });
  }
  // 获取书籍阅读情况
  get_book_history(book_id){
    var key = 'book_history_' + book_id;
    try {
      var value = this.getStorageSync(key);
      if (value) {
        return value;
      }
    } catch (e) {
      
    }
    return false;
  }
  // 获取tokey
  get_tokey(){
    try {
      var value = this.getStorageSync('client_tokey');
      if (value) {
        return value;
      }
    } catch (e) {

    }
    return false;
  }
  // 设置tokey
  set_tokey(value){
    try {
      this.setStorageSync('client_tokey', value);
    } catch (e) {
    }
  }
  // 接口调用错误
  error(msg='系统错误' , type = 'interface'){
    var page = '/pages/error/interface/index';
    this.navigateTo(page, {
      msg:msg
    });
  }

}
export default logs
import request_base from 'request_base'

class request extends request_base {
  constructor() {
    super()
    this.$$prefix = ''
    this.$$path = {
      signUp: 'client/sign',
      binding: 'client/binding',
      bookList: 'book/index',
      bookDetail: 'book/detail',
      bookChapter: 'book/chapter',
      chapterDetail: 'chapter/detail'
    }
  }
  // 登陆
  signUp(params) {
    return this.postRequest(this.$$path.signUp, params)
  }
  // 绑定手机号码
  binding(params){
    return this.postRequest(this.$$path.binding, params)
  }
  // 书籍列表
  bookList(params){
    return this.getRequest(this.$$path.bookList, params)
  }
  // 书籍详情
  bookDetail(params){
    return this.getRequest(this.$$path.bookDetail, params)
  }
  // 章节列表
  bookChapter(params){
    return this.getRequest(this.$$path.bookChapter, params)
  }
  // 章节内容
  chapterDetail(params){
    return this.getRequest(this.$$path.chapterDetail, params)
  }
}

export default request
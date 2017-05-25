import request_base from 'request_base'

class request extends request_base {
  constructor() {
    super()
    this.$$prefix = ''
    this.$$path = {
      signUp: 'user/signup',
      bookList: 'book/index',
      chapter: 'chapter/index'
    }
  }
  // 登陆
  signUp(params) {
    return this.postRequest(this.$$path.signUp, params)
  }
  // 书籍列表
  bookList(params){
    return this.getRequest(this.$$path.bookList, params)
  }
  // 章节列表
  chapter(params){
    return this.getRequest(this.$$path.bookList, params)
  }
}

export default request
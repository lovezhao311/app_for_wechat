import request_base from 'request_base'

class request extends request_base {
  constructor() {
    super()
    this.$$prefix = ''
    this.$$path = {
      signUp: 'user/signup',
      bookList: 'book/index'
    }
  }
  signUp(params) {
    return this.postRequest(this.$$path.signUp, params)
  }
  bookList(params){
    return this.postRequest(this.$$path.bookList, params)
  }
}

export default request
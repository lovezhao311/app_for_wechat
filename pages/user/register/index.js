// pages/user/register/index.js
const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:false,
    form:{
      phone: false,
      validate: '',
    },
    send_phone_lock:false,
    valdate:{
      phone:'',
      validate: '',
      password: '',
      confirm_password: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      userInfo: App.globalData.userInfo
    });
  },
  /**
   * 绑定手机号码
   */
  bindphone(e){
    this.setData({
      "form.phone": e.detail.value
    });
  },
  /**
   * 发送验证码
   */
  sendphone(e){
    if (this.data.send_phone_lock){
      return false;
    }
    if (!App.Tools.isPhone(this.data.form.phone)){
      // 设置validate
      this.setData({
        "valdate.phone": 'from-section-error'
      });
      return false;
    }
    // 防止重复发送
    this.setData({
      send_phone_lock: true
    });
    // 设置validate
    this.setData({
      "form.validate": '000000'
    });
  },
  /**
   * 提交
   */
  formSubmit(e){
    var detail = e.detail.value;
    var userInfo = this.data.userInfo;
    // 手机验证
    if (!App.Tools.isPhone(detail.phone)) {
      this.setData({
        "valdate.phone": 'from-section-error'
      });
      return false;
    }
    // 手机验证码验证
    if (detail.validate.length != 6) {
      this.setData({
        "valdate.validate": 'from-section-error'
      });
      return false;
    }
    // 密码验证
    if (detail.password == '') {
      this.setData({
        "valdate.password": 'from-section-error'
      });
      return false;
    }
    // 确认密码验证
    if (detail.password != detail.confirm_password){
      this.setData({
        "valdate.confirm_password": 'from-section-error'
      });
      return false;
    }
    // 合并
    detail = App.Tools.merge(userInfo, detail);
    // 发送服务器请求
    App.Request.binding(detail)
    .then(data => {

    })
    .catch(data => {

    });
  }
})
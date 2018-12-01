var util = require("../../utils/util.js");
const app = getApp()
const URL = app.globalData.url
Page({
  data: {
    items: [
      { name: 'CHN', value: '       ⟪河道运输用户服务协议⟫', checked: true },
    ],
    aa: 'CHN',
    registBtnTxt: "注册",
    registBtnBgBgColor: "#ff9900",
    getSmsCodeBtnTxt: "获取验证码",
    getSmsCodeBtnColor: "#ff9900",
    // getSmsCodeBtnTime:60,
    btnLoading: false,
    registDisabled: false,
    smsCodeDisabled: false,
    inputUserName: '',
    inputPassword: '',
    phoneNum: '',
    identity:'1'
  },
/**
 * identity 1、司机
 * identity 2、会员
 */
  regClick: function(){
      var that = this;
      var username = this.data.username
      var password = this.data.password
       var identity = this.data.identity
    if (!username || !password){
      wx.showToast({
        title: '不能为空',
        duration: 2000,
        icon: "none"
      })
      return false
      } 
    wx.showToast({
      title: '验证中',
      icon: 'loading',
    });
      wx.request({
        url: URL + 'login/reg',
        data: { name: username, pwd: password, identity: identity},
        method: 'post',
        success: function (res) {
          wx.showToast({
            title: res.data.info,
            duration: 2000,
            icon: "none"
          })
          if (res.data.status != 200){
            return false
          } else if (identity == 1){   //如果是司机 进入审核页
            wx.navigateTo({
              url: '../guanli/index',
            })
          }else{
            wx.navigateTo({
              url: '../index/index',
            })
          }
        },
        fail: function () {
          wx.showToast({
            title: '请求失败',
            duration: 2000,
            icon: "none"
          })
        },
        complete: function () {
          wx.showToast({
            title: '异常',
            duration: 2000,
            icon: "none"
          })
        }
      })
    
},

  radio: function () {
    wx.navigateTo({
      url: '../radio/index',
    })
  },
  huiyuan:function(){
   var that = this
   that.setData({
     identity:2
   })
  },
  siji:function(){
    var that = this
    that.setData({
      identity: 1
    })
  },
  forgotpassword:function(){
    wx.navigateTo({
      url: '../findpassword/index',
    })
  },

  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },
})
var util = require("../../utils/util.js");
const app = getApp()
const URL = app.globalData.url
Page({
  data:{
    loginBtnTxt:"登录",
    loginBtnBgBgColor:"#ff9900",
    btnLoading:false,
    disabled:false,
    inputUserName: '16631150870',
    inputPassword: 'admin',
  },

  loginBtnClick:function(){
    var that = this;
    var username = this.data.username
    var password = this.data.password
    wx.showToast({
      title: '登录中',
      icon: 'loading',
    });
    
    wx.request({
      url: URL+'login/login',
      data: {aa:'bb'},
      method: 'post', 
      success: function (res) {
       console.log(res);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  registersc: function(){
    wx.navigateTo({
      url: '../regist/index',
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
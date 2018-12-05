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
      data: {
        account: username, 
        pwd: password, 
      },
      header: {//请求头
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'post', 
      success: function (res) {
        console.log(res.data.status);
        wx.showToast({
          title: res.data.info,
          duration: 2000,
          icon: "none"
        })
        // save: function(e) {
        //   console.log('开始保存')
        //   wx.setStorage({
        //     key: 'key1',
        //     data: 'data1',
        //     success: function (res) {
        //       console.log('异步保存成功')
        //     }
        //   })
        //   wx.setStorageSync('key2', 'data2')
        //   console.log('同步保存成功')
        // }
        if (res.data.status != 200 && res.data.status != 201) {
          return false
        }
          if (res.data.status == 200) {
            console.log('开始保存')  
            wx.navigateTo({
              url: '../index/index',
            })
            wx.setStorage({
            key: 'key1',
              data:  'account:username',
            success: function (res) {
              console.log('异步保存成功')
            }
          })
          //   wx.setStorageSync('key2', 'data2')
          // console.log('同步保存成功')
          }
          if (res.data.status == 201){
            console.log('开始保存')  
            wx.navigateTo({
              url: '../car/index',
            })
            wx.setStorage({
              key: 'key2',
              data: account.username,
              success: function (res) {
                console.log('异步保存成功')
              }
            })
            // wx.setStorageSync('key2', 'data2')
            // console.log('同步保存成功')
          }
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
         url: '../guanli/index',
       })
  },
  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },


})
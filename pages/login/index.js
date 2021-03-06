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

        wx.showToast({
          title: res.data.info,
          duration: 2000,
          icon: "none"
        })
        if (res.data.status != 200 && res.data.status != 201) {
          return false
        }
          if (res.data.status == 200) {
            app.globalData.user = [
              {
                id: res.data.data.id,
                account: res.data.data.account,
              },
            ]
            console.log('开始保存')  
            wx.navigateTo({
              url: '../index/index',
            })
            //登入成功之后保存本地客户信息

            wx.setStorageSync('user', { id: res.data.data.id, account: res.data.data.account ,user_type:1})
            console.log('同步保存成功')
            wx.setStorageSync('user_type',{type:2})
            wx.setStorage({
            key: 'user1',
              data: {
                id: res.data.data.id,
                account: res.data.data.account, 
              },
            success: function (res) {
              console.log('异步保存成功')
            }
          })
          //   wx.setStorageSync('user', 'data2')
            //wx.setStorage('user_type',{type:2})
          // console.log('同步保存成功')
            wx.setStorage({
              key: 'user_type',
              data: 2
            })
          }
          if (res.data.status == 201){
            console.log('开始保存')  
            app.globalData.car = [
              {
                id: res.data.data.id,
                account: res.data.data.account,
              },
            ]
           // 登入成功之后保存司机的登入信息
            wx.setStorageSync('car', { id: res.data.data.id, account: res.data.data.account})
            //yonghuleixing
            wx.setStorageSync('user_type',{type:1})
            console.log('同步保存成功')

            
            wx.setStorage({
              key: 'car1',
              data: {
              
                id: res.data.data.id,
                account: res.data.data.account,
              },
              success: function (res) {
                console.log('异步保存成功')
              }
            })
            //wx.setStorage('user_type',{type:1})
            wx.setStorage({
              key: 'user_type',
              data: 1 
            })
            wx.navigateTo({
              url: '../car/index',
            })
           
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
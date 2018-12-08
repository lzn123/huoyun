var util = require("../../utils/util.js");
const app = getApp()
const URL = app.globalData.url
Page({
  data:{
    registBtnTxt:"提交",
    registBtnBgBgColor:"#ff9900",
    getSmsCodeBtnTxt:"获取验证码",
    getSmsCodeBtnColor:"#ff9900",
    // getSmsCodeBtnTime:60,
    btnLoading:false,
    registDisabled:false,
    smsCodeDisabled:false,
    phoneNum: '',
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  nolike:function(){
    wx.navigateTo({
      url: '../login/index',
    })
  },
  onUnload:function(){
    // 页面关闭
    
  },
  formSubmit:function(e){
    let photo = /^1[345768]{1}\d{9}$/;
    let params = e.detail.value;
    if (params.phone == '') {
      showToast("手机号");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.password == '') {
      showToast("密码");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.password1 == '') {
      showToast("新密码");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (!photo.test(params.phone)) {
      wx.showToast({
        title: '手机号格式不正确！',
        duration: 2000,
        icon: "none"
      })
      this.setData({
        phfocus: true
      })
      return;
    }
    function showToast(val) {
      wx.showToast({
        title: val + '不能为空',
        duration: 2000,
        icon: "none"
      })
    }
    wx.request({
      url: URL + 'User/findpassword',
      method: "POST",
      data: {
        phone: params.phone,
        password: params.password,
        password1:params.password1,
       
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data.status)
        if (res.data.status == 105){
          wx.showToast({
            title:'两次密码不一致',
            duration: 2000,
            icon: "none"
          })
        }
        if (res.data.status == 200) {
          wx.showToast({
            title: '更改成功',
            duration: 2000,
            icon: "none"
          })
          wx.navigateTo({
            url: '../login/index',
          })
        }
        if (res.data.status == 1050) {
          wx.showToast({
            title: '更改失败',
            duration: 2000,
            icon: "none"
          })
        }
      }
    })
    
  }


})
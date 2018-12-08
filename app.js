//app.js
App({
  onLaunch: function () {
    var that = this
    //调用API从本地缓存中获取数据
    //获取司机缓存
    wx.getStorage({
      key: 'car',
      success: function (res) {
        console.log(res.data);
        if(res.data){
          that.globalData.car = res.data
        }
      }
    })
    //获取用户缓存
    wx.getStorage({
      key: 'user',
      success: function (res) {
        if (res.data) {
          that.globalData.user = res.data
        }
      }
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    url:'https://g.hbyingluo.com/api/',
    img_url: 'https://g.hbyingluo.com',
    header:{'Session': ''},
    user:'',
    car:''
  }
})




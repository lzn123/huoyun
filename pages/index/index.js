var util = require("../../utils/util.js");
const app = getApp()
const URL = app.globalData.url
Page({
  data: {
    departure: '出发地',
    destination: '目的地',
    jiner:'45',
    scale: 14,
    addtel: '',
    hiddenLoading: false,
    imageWidth: wx.getSystemInfoSync().windowWidth
  },
  indexcar: function (e) {
    var val = e.currentTarget.dataset.index
    this.setData({
      indexcar: val,
    })
  },
  sexDeparture: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          departure: res.address
        })
      }
    })
  },
  sexDestination: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          destination: res.address
        })
      }
    })
  },
  onLoad: function (options) {
    // this.setData({
    //   gender: app.globalData.userInfo.gender,
    //   name: (app.globalData.userInfo.name == '') ? app.globalData.userInfo.nickName : app.globalData.userInfo.name,
    //   phone: app.globalData.userInfo.phone,
    //   vehicle: app.globalData.userInfo.vehicle
    // })

    var that = this
    wx.request({
      url: URL + 'User/upload',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          quanbu: res.data,
          indexcar: res.data[0].id,
        })
      }
    })
  },
  //登入控制器
  login:function(){
    var user_type = wx.getStorageSync('user_type')
    try{
      if(user_type){
        console.log(user_type)
        if(user_type == 1){
          console.log('用户')
          try {
            var car = wx.getStorageSync('car')
            if (car) {
              // Do something with return value
              console.log('car1')
              wx.navigateTo({
                url: "../car/index",
              })
              //return false;
            } else {
              console.log('car2')
              wx.navigateTo({
                url: "../login/index",
              })
              //return false;
            }
          } catch (e) {
            // Do something when catch error
          }
        }
        if (user_type == 2) {
          console.log('司机')
          try {
            var user = wx.getStorageSync('user')
            if (user) {
              // Do something with return value
              console.log('user1')
              wx.navigateTo({
                url: "../personal/index",
              })
              //return false;
            } else {
              console.log('user2')
              wx.navigateTo({
                url: "../login/index",
              })
              //return false;
            }
          } catch (e) {
            // Do something when catch error
          }
        }
      }else{
        console.log('用户类型不存在')
            wx.navigateTo({
           url: "../login/index",
         })
      }
    }catch(e){
      /////
    }
  },
  //用户消息控制器
  nser:function(){
    wx.getStorage({
      key: 'car',
      success: function (res) {
        console.log(res.data.account)
        if (res.data.account == "") {
          wx.showToast({
            title: '请登入',
            duration: 2000,
            icon: "none"
          })
        } else {
          wx.navigateTo({
            url: '../advices/advices',
          })
          // wx.showToast({
          //   title: '请登入',
          //   duration: 2000,
          //   icon: "none"
          // })
        }
      }
    })
    wx.getStorage({
      key: 'user',
      success: function (res) {
        console.log(res.data.account)
        if (res.data.account == "") {
          wx.showToast({
            title: '请登入',
            duration: 2000,
            icon: "none"
          })
        } else {
          wx.navigateTo({
            url: '../advices/advices',
          })
        }
      },
    })
  },
  //底部用车控制器
  yongche: function (e){
    var that = this
    var viewId = e.target.id;
    var viewDataSet = e.target.dataset;
    var viewText = viewDataSet.text;

    /**地址*/
    var departure = that.data.departure
    var destination = that.data.destination
    wx.getStorage({
      key: 'car',
      success: function (res) {
        console.log(res.data.account)
        if (res.data.account == "") {
          wx.showToast({
            title: '请登入',
            duration: 2000,
            icon: "none"
          })
        } else {
          wx.navigateTo({
            url: '../xuqiou/index?departure=' + departure + '&destination=' + destination + '&typeid=' + that.data.indexcar,
          })
          // wx.showToast({
          //   title: '请登入',
          //   duration: 2000,
          //   icon: "none"
          // })
        }
      }
    })
    wx.getStorage({
      key: 'user',
      success: function (res) {
        console.log(res.data.account)
        if (res.data.account == "") {
          wx.showToast({
            title: '请登入',
            duration: 2000,
            icon: "none"
          })
        } else {
          wx.navigateTo({
            url: '../xuqiou/index?departure=' + departure + '&destination=' + destination + '&typeid=' + that.data.indexcar,
          })
        }
      },
    })
  },
  requesDriver() {
    util.request({
      url: '',
      mock: false,
    }).then((res) => {

      const drivers = res.data.drivers
      const driver = drivers[Math.floor(Math.random() * drivers.length)];
      wx.setStorage({
        key: "driver",
        data: driver
      });
      this.setData({
        hiddenLoading: true,
        driver: driver
      })
    })

  },
  bindcontroltap: (e) => {
    console.log("hello")
    this.movetoPosition();
  },
  onReady() {

  },
  //监听页面的除此加载
  //请求后台table的车辆选中
  onShow: function () {
   
  },
  movetoPosition: function () {
    this.mapCtx.moveToLocation();
  },

  bindregionchange: (e) => {

  },
  // toCancel() {
  //   wx.redirectTo({
  //     url: "/pages/cancel/cancel"
  //   })

  // },
  // toApp() {
  //   wx.showToast({
  //     title: '暂不支持',
  //     icon: 'success',
  //     duration: 1000
  //   })
  // },
  // toEvaluation() {
  //   wx.redirectTo({
  //     url: "/pages/evaluation/evaluation",
  //   })
  // },
  onReady: function () {
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })

  },
})
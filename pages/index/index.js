var app = getApp();
Page({
  data: {
    indexcar: true,
   indexcar1: false,
    indexcar2: false,
    departure: '出发地',
    destination: '目的地',
    jiner:'45',
    scale: 14,
    addtel: '',
    hiddenLoading: false,
    imageWidth: wx.getSystemInfoSync().windowWidth
  },
  indexcar: function (e) {
    console.log(e)
    this.setData({
      indexcar: true,
      indexcar1: false,
      indexcar2: false
    })
  },
  indexcar1: function (e) {
    this.setData({
      indexcar1: true,
      indexcar: false,
      indexcar2: false
    })
  },
  indexcar2: function (e) {
    this.setData({
      indexcar2: true,
      indexcar: false,
      indexcar1: false
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
    this.setData({
      gender: app.globalData.userInfo.gender,
      name: (app.globalData.userInfo.name == '') ? app.globalData.userInfo.nickName : app.globalData.userInfo.name,
      phone: app.globalData.userInfo.phone,
      vehicle: app.globalData.userInfo.vehicle
    })
  },
  //登入控制器
  login:function(){
   
    // var car = this;
    // var user = this;
    wx.getStorage({
      key: 'car',
      success: function (res) {
        console.log(res.data.account)
        if (res.data.account == ""){
          wx.navigateTo({
          url: "../login/index",
        })
        }else{
          wx.navigateTo({
            url: "../car/index",
          })
        }
      }
    })
      wx.getStorage({
      key: 'user',
      success: function (res) {
        console.log(res.data.account)
        if (res.data.account == "") {
          wx.navigateTo({
            url: "../login/index",
          })
        } else {
          wx.navigateTo({
            url: "../personal/index",
          })
        }
      },
      fail:function(){
        wx.navigateTo({
          url: "../login/index",
        })
      }
    })
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
      url: '../xuqiou/index?departure=' + departure + '&destination=' + destination,
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
      url: '../xuqiou/index?departure=' + departure + '&destination=' + destination,
          })
        }
      },
    })
  },

  onLoad:function(){
    console.log(app.globalData.name)
  },
  // onLoad: function () {

  //   let { bluraddress, strLatitude, strLongitude, endLatitude, endLongitude } = app.globalData
  //   this.setData({
  //     markers: [{
  //       iconPath: "../../assets/images/str.png",
  //       id: 0,
  //       latitude: strLatitude,
  //       longitude: strLongitude,
  //       width: 30,
  //       height: 30
  //     }, {
  //       iconPath: "../../assets/images/end.png",
  //       id: 0,
  //       latitude: endLatitude,
  //       longitude: endLongitude,
  //       width: 100,
  //       height: 30
  //     }],
  //     polyline: [{
  //       points: [{
  //         longitude: strLongitude,
  //         latitude: strLatitude
  //       }, {
  //         longitude: endLongitude,
  //         latitude: endLatitude



  //       }],
  //       color: "red",
  //       width: 4,
  //       dottedLine: true
  //     }],

  //   });

  //   wx.getSystemInfo({
  //     success: (res) => {
  //       this.setData({
  //         controls: [{
  //           id: 1,
  //           iconPath: '../../assets/images/mapCart.png',
  //           position: {
  //             left: res.windowWidth / 2 - 11,
  //             top: res.windowHeight / 2 - 60,
  //             width: 22,
  //             height: 45
  //           },
  //           clickable: true
  //         }, {
  //           id: 2,
  //           iconPath: '../../assets/images/location.png',
  //           position: {
  //             left: 20, // 单位px
  //             top: res.windowHeight - 150,
  //             width: 40, // 控件宽度/px
  //             height: 40,
  //           },
  //           clickable: true
  //         }, {
  //           id: 3,
  //           iconPath: '../../assets/images/walk.png',
  //           position: {
  //             left: 20, // 单位px
  //             top: res.windowHeight - 200,
  //             width: 40, // 控件宽度/px
  //             height: 40,
  //           },
  //           clickable: true
  //         }],

  //       })
  //     }
  //   })

  // },

  // onShow() {
  //   this.requesDriver();
  //   this.mapCtx = wx.createMapContext("didiMap");
  //   this.movetoPosition();
  // },
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
  onShow: function () {
    // wx.navigateTo({
    //   url: "../login/index",
    // })
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
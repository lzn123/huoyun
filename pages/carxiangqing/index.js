// pages/need/index.js
Page({
  // formSubmit: function (e) {
  //   console.log('form发生了submit事件，携带数据为：', e.detail.value)
  // },
  // formReset: function () {
  //   console.log('form发生了reset事件')
  // },
  /**
   * 页面的初始数据
   */
  data: {
    // selected: true,
    // selected1: false,
    // selected2: false,
    // departure: '出发地',
    // destination: '目的地',
    fomttoe: '确定',
    quxiao: '取消',
    // registDisabled: false,
    // btnLoading: false,
    jinqian:'100'

  },
  queding:function(){
    wx.navigateTo({
      url: '../carjieshou/index',
    })
  },
  // sexDeparture: function () {
  //   var that = this;
  //   wx.chooseLocation({
  //     success: function (res) {
  //       that.setData({
  //         departure: res.address
  //       })
  //     }
  //   })
  // },
  // sexDestination: function () {
  //   var that = this;
  //   wx.chooseLocation({
  //     success: function (res) {
  //       that.setData({
  //         destination: res.address
  //       })
  //     }
  //   })
  // },
  // onLoad: function (options) {
  //   this.setData({
  //     gender: app.globalData.userInfo.gender,
  //     name: (app.globalData.userInfo.name == '') ? app.globalData.userInfo.nickName : app.globalData.userInfo.name,
  //     phone: app.globalData.userInfo.phone,
  //     vehicle: app.globalData.userInfo.vehicle
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    // var that = this 
    // var dingdan = that.data.id
    // that.setData({
    //   dingdan: id,
    // })
    console.log(id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
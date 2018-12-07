// pages/need/index.js
var util = require("../../utils/util.js");
const app = getApp()
const URL = app.globalData.url
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
    fomttoe: '确定',
    quxiao: '取消',
    //jinqian:'100'

  },
  queding:function(){
    wx.navigateTo({
      url: '../carjieshou/index',
    })
  },
  book:function (e){
    var that = this
    var id = e.currentTarget.dataset.id
    wx.request({
      url: URL + 'Desired/confirm',
      data: {
        id:id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        if (res.data.status == 200){
          wx.showToast({
            title: '接收订单成功',
            duration: 2000,
            icon: "none"
          })
          wx.navigateTo({
            url: '../cardingdan/index',
          })
        }
        if (res.data.status == 105){
          wx.showToast({
            title: '接收订单接收失败',
            duration: 2000,
            icon: "none"
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.showToast({
      title: '请求中',
      icon: 'loading',
    });
    var that = this 
    var id = this.data.id
    wx.request({
      url: URL + 'Desired/details',
      data: { 
        id:e.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          quanbu: res.data,
        })
      }
    })
  },
//司机取消订单控制器
  abolish:function(e){
    wx.showToast({
      title: '请求中',
      icon: 'loading',
    });
    var that = this
    var id = e.currentTarget.dataset.id
    console.log(id)
    wx.request({
      url: URL + 'Desired/abolish',
      data: {
        id:id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.status == 200) {
          wx.showToast({
            title: '取消订单接收成功',
            duration: 2000,
            icon: "none"
          })
          wx.navigateTo({
            url: '../cardingdan/index',
          })
        }
        if (res.data.status == 105) {
          wx.showToast({
            title: '取消订单接收失败',
            duration: 2000,
            icon: "none"
          })
        }
      }
    })
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
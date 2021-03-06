// pages/jifen/index.js
var util = require("../../utils/util.js");
const app = getApp()
const URL = app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: false,
    selected1: true,
    selected2: false,
    //day: '2018-01-01   12:00',
    gear: '订单编号: 15482648547',
    dizhi: '石家庄市桥西区新胜利大街塔坛国际5号写字楼至桥西区宫家庄学生公寓',
    leixing: '搬家',
    name: '李某某',
    open: '12321414141',
    car: '面包车',
    money: '100'

  },
  selected: function (e) {
    wx.navigateTo({
      url: '../carquanbu/index',
    })
  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected: false,
      selected2: false
    })
  },
  selected2: function (e) {
    wx.navigateTo({
      url: '../carwanjie/index',
    })
  },
  sus_book:function(e){
    wx.showToast({
      title: '请求中',
      icon: 'loading',
    });
    var that = this
    var id = e.currentTarget.dataset.id
    wx.request({
      url: URL + 'Desired/achieve',
      data: {
        id: id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        if (res.data.status == 200) {
          wx.showToast({
            title: '完成订单成功',
            duration: 2000,
            icon: "none"
          })
        }
        if (res.data.status == 105) {
          wx.showToast({
            title: '完成订单接收失败',
            duration: 2000,
            icon: "none"
          })
        }
      }
    })
    wx.showToast({
      title: '你暂无数据',
      icon: 'loading',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showToast({
      title: '请求中',
      icon: 'loading',
    });
    var that = this
    //var id = this.data.id
    wx.request({
      url: URL + 'Desired/receive',
      data: {
        //id: e.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          jieshou: res.data,
        })
      }
    })
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
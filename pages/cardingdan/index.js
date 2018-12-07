// pages/cardingdan/index.js
var util = require("../../utils/util.js");
const app = getApp()
const URL = app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '请求中',
      icon: 'loading',
    }); 
    wx.getStorage({
      key: 'car',
      success: function (res) {
        console.log(res.data)
      }
      })
    var that = this
    var car_id = app.globalData.car.id
    wx.request({
      url: URL + 'Desired/dingdan',
      data: {
        did: car_id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //console.log(res.data);
        if (res.data.status == 200) {
          wx.showToast({
            title: '完成订单成功',
            duration: 2000,
            icon: "none"
          })
          that.setData({
            jieshou : res.data.data
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
  },
  selected:function(e){
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }

  },
  // 滚动切换标签样式
    switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
})
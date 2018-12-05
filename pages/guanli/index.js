// pages/guanli/index.js
var util = require("../../utils/util.js");
var common = require("../../utils/common.js");
const app = getApp()
const URL = app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: [
      
        // 0: '', //身份证反面
        // 1: '', //身份证正面
        // 2: '', //驾驶证照片
        // 3:'' //运营证
     
    ],
    registBtnTxt: '保存',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

/**
 *  参数
 */
  vehiclename: function (event) {
    this.setData({ vehiclename: event.detail.value })
  },
  vehiclephone: function (event) {
    this.setData({ vehiclephone: event.detail.value })
  },
  vehiclebulk: function (event) {
    this.setData({ vehiclebulk: event.detail.value })
  },
  vehiclecarrying: function (event) {
    this.setData({ vehiclecarrying: event.detail.value })
  },
 

  //上传本地
  uploadImg: function (e) {
    console.log(e);
    var that = this;
    var k = "pic." + e.currentTarget.dataset.index + "";
    wx.chooseImage({
      count: 1,  //最多可以选择的图片总数 
      success: function (res) {
        console.log(res);
        var file = res.tempFilePaths[0];

        that.setData({
          [k]: file
        })
      }
    })
  },

/**
 * 保存
 */
  save:function(){
    var that = this
    var pic = this.data.pic
    var vehiclename = this.data.vehiclename
    var vehiclephone = this.data.vehiclephone
    var vehiclebulk = this.data.vehiclebulk
    var vehiclecarrying = this.data.vehiclecarrying
    if (!vehiclename || !vehiclephone || !vehiclebulk || !vehiclecarrying || !pic['0'] || !pic['1'] || !pic['2'] || !pic['3']){
        wx.showToast({
          title: '不能为空',
          duration: 2000,
          icon: "none"
        })
        return false
      }
    common.uploadimg({
      path:pic,
      that:this,
      url: URL + 'login/reg'
     //url:'http://www.zs.com/test/index/'
    })
  }
 
})
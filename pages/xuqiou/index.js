// pages/need/index.js
var util = require("../../utils/util.js");
const app = getApp()
const URL = app.globalData.url
Page({
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    departure: '出发地',
    destination: '目的地',
    fomttoe:'确定',
    registDisabled: false,
    btnLoading: false,

  },
  selected: function (e) {
    this.setData({
      selected: true,
      selected1: false,
      selected2: false
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
    this.setData({
      selected2: true,
      selected: false,
      selected1: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that = this  
    var departure = option.departure
    var destination = option.destination
    that.setData({
      departure: departure,
        destination: destination
    })

  },
  formSubmit:function(e){
    wx.getStorage({
      key: 'user',
      success: function (res) {
        console.log(res.data);
        }
      })
    let photo = /^1[345768]{1}\d{9}$/;
    let photo1 = /^1[345768]{1}\d{9}$/;
    let params = e.detail.value;
    if(params.phone == '') {
  showToast("手机号");
  this.setData({
    phfocus: true
  })
  return;
}
    if (params.leixing== '') {
      showToast("运送类型");
      this.setData({
        phfocus: true
      })
      return;
    }
  if (params.user == '') {
      showToast("发货姓名");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.shu == '') {
      showToast("数量");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.qidian == '') {
      showToast("出发地");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.zhongdian == '') {
      showToast("终点");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.tiji == '') {
      showToast("体积");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.zhongliang == '') {
      showToast("重量");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.phone1 == '') {
      showToast("收货人的电话");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.consignee == '') {
      showToast("收货人的姓名");
      this.setData({
        phfocus: true
      })
      return;
    }
    if (params.beizhu == '') {
      showToast("备注");
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
    if (!photo1.test(params.phone1)) {
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
    var uid = app.globalData.user.id
wx.request({
  url: URL + 'Desired/add',
  method: "POST",
  data: {
    qidian: params.qidian,//送货起点
    zhongdian: params.zhongdian,//送货终点
    leixing: params.leixing,//运送货物类型
    user: params.user,//发货人姓名
    phone: params.phone,//发货人电话
    consignee: params.consignee,//收货人的姓名
    phone1: params.phone1,//收货人的电话
    shu: params.shu,//数量
    tiji: params.tiji,//体积
    zhongliang: params.zhongliang,//重量
    beizhu:params.beizhu,//备注
<<<<<<< HEAD
    uid: uid//用户id
=======
    uid: uid
>>>>>>> 5a707e17364214e8d3ffefc93d6f7531d91b1954
  },
  header: {
    'content-type': 'application/x-www-form-urlencoded' // 默认值
  },

  success: function (res) {
<<<<<<< HEAD
  console.log(res.data);
=======
   
>>>>>>> 5a707e17364214e8d3ffefc93d6f7531d91b1954
    //getApp().globalData.header.Session = 'JSESSIONID=' + res.data.sessionId;  //这一句很重要。
    // getApp().globalData.Session = res.data.sessionId;
    // if (res.data.status == 1) {
    //   wx.navigateTo({
    //     url: '../index/index',
    //   })
    // }
    if (res.data.status != 200) {
      return false
    }
    if (res.data.status == 200) {
      wx.showToast({
        title: '发布成功',
        duration: 2000,
        icon: "none"
      })
      wx.navigateTo({
        url: '../userdingdan/index',
      })
    }else{
      wx.showToast({
        title: '发布失败....',
        duration: 2000,
        icon: "none"
      })
    }
  },

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
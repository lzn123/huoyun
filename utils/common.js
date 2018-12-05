//多张图片上传
function uploadimg(data) {
  var that = data.that

    var i = data.i ? data.i : 0//当前上传的哪张图片
    var success = data.success ? data.success : 0//上传成功的个数
    var fail = data.fail ? data.fail : 0//上传失败的个数
  wx.uploadFile({
    url: data.url,
    filePath: data.path[i],
    name: 'file',//这里根据自己的实际情况改
    formData: null,//这里是上传图片时一起上传的数据

    success: (resp) => {
      if(!resp.code){
      success++;     
           }     //图片上传成功，图片上传成功的变量+1
    },
    fail: (res) => {
      fail++;//图片上传失败，图片上传失败的变量+1
    },
    complete: () => {
      i++;//这个图片执行完上传后，开始上传下一张
      if (i > 3) {   //当图片传完时，停止调用          
       return true
      } else {//若图片还没有传完，则继续调用函数
        data.i = i;
        data.success = success;
        data.fail = fail;
        uploadimg(data);
      }

    }
  })
}
module.exports = {
  uploadimg: uploadimg,
}
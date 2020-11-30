//app.js
App({
  globalData: {},
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    // this.globalData = {}

    // 获取胶囊和导航栏信息
    let menuBtn = wx.getMenuButtonBoundingClientRect();
    this.globalData.menuBar = {};
    this.globalData.menuBar.top = menuBtn.top;
    this.globalData.menuBar.height = menuBtn.height;
    wx.getSystemInfo({
      success: (result) => {
        let barHeight = result.statusBarHeight;
        this.globalData.menuBar.screentHeight = barHeight + menuBtn.height + (menuBtn.top - barHeight) * 2;
        console.log(this.globalData.menuBar);
      },
      fail: (error) => {
        wx.showToast({
          title: '获取设备信息失败',
          icon: 'none'
        })
      }
    })
  }
})

// components/navigation-bar/navigation-bar.js
const app = getApp();
const { globalData: { menuBar, system } } = app;

Component({
  options: {
    styleIsolation: 'shared',
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    menuBar: {
      top: menuBar.top,
      bottom: menuBar.bottom,
      right: menuBar.right,
      left: menuBar.left,
      height: menuBar.height
    },
    system: {
      windowWidth: system.windowWidth
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

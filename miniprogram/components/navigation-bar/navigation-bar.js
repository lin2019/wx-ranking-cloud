// components/navigation-bar/navigation-bar.js
const app = getApp();
const { globalData: { menuBar } } = app;

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
      screentHeight: menuBar.screentHeight
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1. 首页导航数据，进行数组声明
    // navList: []
    navList: [{
        "text": "首页",
        "id": 0
      },
      {
        "text": "动画",
        "id": 1
      },
      {
        "text": "番剧",
        "id": 2
      }, {
        "text": "国创",
        "id": 3
      }, {
        "text": "音乐",
        "id": 4
      }, {
        "text": "舞蹈",
        "id": 5
      }, {
        "text": "科技",
        "id": 6
      }, {
        "text": "游戏",
        "id": 7
      }
    ],
    // 被点击的首页导航的菜单的索引
    currentIndexNav: 0,
    // 轮播图数据
    swiperList: [{
        "imgSrc": "../../icons/1.JPG"
      },
      {
        "imgSrc": "../../icons/2.JPG"
      },
      {
        "imgSrc": "../../icons/3.JPG"
      },
      {
        "imgSrc": "../../icons/4.JPG"
      }
    ],
    // 视频列表数据
    videosList:[
      {
        "id":0,
        "imgSrc": "../../icons/11.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      },
      {
        "id":1,
        "imgSrc": "../../icons/22.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      },{
        "id":2,
        "imgSrc": "../../icons/33.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      },{
        "id":3,
        "imgSrc": "../../icons/44.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      },{
        "id":4,
        "imgSrc": "../../icons/55.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      },{
        "id":5,
        "imgSrc": "../../icons/66.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      },{
        "id":6,
        "imgSrc": "../../icons/77.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      },{
        "id":7,
        "imgSrc": "../../icons/88.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      },{
        "id":8,
        "imgSrc": "../../icons/99.JPG",
        "desc":"世界上最自律的易烊千玺，内心最强大的杨幂，最理性的李易峰",
        "playCount":"10w",
        "commentCount":"1.5k",
      }
    ]

  },
  // 点击首页导航按钮
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  // 2.定义获取首页导航数据的方法
  getNavList() {
    // let that=this;
    // // 利用小程序内置的发送请求的方法
    // wx.request({
    //   url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
    //   success(res) {
    //     // console.log(res);
    //     if(res.data.code===0){
    //       that.setData({
    //         navList:res.data.data.navList
    //       })
    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 3.获取首页导航数据，在onload页面刚加载的时候就进行数据请求
    this.getNavList();
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
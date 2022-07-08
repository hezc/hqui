export default {
  name: 'HqSlider',
  props: {
    autoplay: {
      type: Number,
      default() {
        return 5000
      }
    },
    navigation: {
      type: Boolean,
      default() {
        return true
      }
    },
    pagination: {
      type: Boolean,
      default() {
        return true
      }
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      width: 0,
      offset: 0,
      index: 0,
      swipes: [],
      currentDuration: 0,
      timer: null
    }
  },
  computed: {
    count() {
      return this.swipes.length
    },
    styleObject() {
      return {
        paddingLeft: this.width + 'px',
        width: (this.count + 2) * this.width + 'px',
        transitionDuration: `${this.currentDuration}ms`,
        transform: `translateX(${this.offset}px)`
      }
    },
    activeIndicator() {
      return (this.index + this.count) % this.count
    }
  },
  watch: {
    swipes() {
      this.init()
    }
  },
  mounted() {
    
    this.init()
    // 监听 resize事件,改变窗口重新初始化
    window.addEventListener('resize', () => {
      this.init()
    })
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    transitionEnd() {
      // 最后一张向后
      if (this.index === this.count) {
        this.currentDuration = 0
        this.swipes[0].offset = 0
        this.offset = -this.width
        this.index = 0
      }
      // 第一页向前
      if (this.index === -1) {
        this.currentDuration = 0
        this.offset = -(this.width * (this.activeIndicator + 1))
        this.index = this.count - 1
        this.swipes[this.index].offset = 0
      }
    },
    transitionstart() {},
    // 初始化
    init() {
      clearInterval(this.timer)
      this.width = this.$el.getBoundingClientRect().width
      this.index = 0
      this.currentDuration = 0
      this.offset = this.count > 1 ? -this.width : 0
      this.swipes.forEach((swipe) => {
        swipe.offset = 0
      })
      this.autoPlay()
    },
    // 显示舞台
    show() {
      // 第一个
      // console.log('this.index', this.index)
      // console.log('this.activeIndicator', this.activeIndicator)
      if (this.index === -1) {
        this.currentDuration = 0
        this.offset = 0
        this.swipes[this.count - 1].offset = -(this.count * this.width)
        this.currentDuration = this.duration
      }
      // 最后一个
      else if (this.index === this.count) {
        this.currentDuration = 0
        this.swipes[0].offset = this.count * this.width
        this.offset = -((this.count + 1) * this.width)
        this.currentDuration = this.duration
      } else {
        this.swipes[0].offset = 0
        this.currentDuration = this.duration
        this.offset = -((this.activeIndicator + 1) * this.width)
      }
    },
    // 停止自动播放
    stopPlay() {
      clearInterval(this.timer)
    },
    // 自动播放
    autoPlay() {
      const { autoplay } = this
      if (autoplay && this.count > 1) {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          // console.log(autoplay)
          this.next()
        }, autoplay)
      }
    },
    // 跳转到指定位置
    goto(index) {
      this.index = index - 1
      this.show()
    },
    // 上一个
    prev() {
      this.index--
      if (this.index === -2) {
        this.index = this.count - 2
      }
      this.show()
    },
    // 下一个
    next() {
      this.index++
      if (this.index > this.count) {
        this.index = 1
      }
      this.show()
    }
  }
}
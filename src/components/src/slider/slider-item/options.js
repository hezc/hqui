export default {
  name: 'HqSliderItem',
  data() {
    return {
      offset: 0
    }
  },
  computed: {
    style() {
      return {
        width: this.$parent.width + 'px',
        transform: `translateX(${this.offset}px)`
      }
    }
  },
  beforeCreate() {
    this.$parent.swipes.push(this)
  },
  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1)
  }
}
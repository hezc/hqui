import HqSlider  from './slider.vue'
import HqSliderItem from './slider-item.vue'

const sliderData = {
  name: 'vue slider',
  bannerList: [{
    Url:'#',
    Img:'https://dfsimg11.hqbuycdn.com/group5/M00/1E/7C/wKiCy2JnTj2AKwjQAAONIhse4bA266.jpg'
  },
  {
    Url:'#',
    Img:'https://dfsimg12.hqbuycdn.com/group5/M00/1E/77/wKiCzGJeHGeAHqFGAAHYOOTVquU517.jpg'
  },
  {
    Url:'#',
    Img:'https://dfsimg12.hqbuycdn.com/group5/M00/1E/09/wKiCy2HpEqmAB_LYAAJ-6IEWxdg215.jpg'
  }]
}
export default {
  components: {
    HqSlider,
    HqSliderItem
  },
  data() {
    return {
      sliderData
    }
  }
}
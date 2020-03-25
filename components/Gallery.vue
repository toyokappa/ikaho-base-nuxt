<template lang="pug">
  #gallery
    Hooper(:settings="hooperSettings" ref="carousel")
      Slide(v-for="photo in photos" :key="photo.sys.id")
        .photo(:style="`background-image: url(${photo.fields.file.url})`")
    .navigation
      .prev(@click="slidePrev")
        img(:src="arrowLeft")
      .next(@click="slideNext")
        img(:src="arrowRight")
</template>

<script>
import { Hooper, Slide, Navigation } from 'hooper'
import 'hooper/dist/hooper.css'
import arrowLeft from '@/assets/arrow_left.svg'
import arrowRight from '@/assets/arrow_right.svg'

export default {
  components: {
    Hooper,
    Slide,
    Navigation
  },
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      arrowLeft,
      arrowRight,
      hooperSettings: {
        itemsToShow: 1.5,
        centerMode: true,
        infiniteScroll: true,
        whileControl: false
      }
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel.slidePrev()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>

<style lang="sass" scoped>
#gallery
  position: relative
  .hooper
    height: 500px
    .hooper-track
      .hooper-slide
        .photo
          width: 99%
          height: 500px
          background-size: cover
          background-position: center center
  .navigation
    .prev, .next
      position: absolute
      top: 50%
      transform: translateY(-50%)
      background-color: rgba(255, 255, 255, 0.3)
      padding: 13px 13px 10px
      border: 1px solid white
      cursor: pointer
      img
        width: 15px
    .prev
      left: 10px
    .next
      right: 10px
</style>
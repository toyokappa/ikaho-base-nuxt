<template lang="pug">
  .gallery
    .photo-area
      Hooper(:settings="hooperSettings" ref="carousel")
        Slide(v-for="photo in gallery" :key="photo.sys.id")
          .photo(:style="`background-image: url(${photo.fields.file.url})`")
    ul.pagination
      li.prev(@click="slidePrev")
        img(:src="arrowLeft")
      li.page(
        v-for="(photo, index) in gallery"
        :key="photo.sys.id"
        :style="`background-image: url(${photo.fields.file.url})`"
        @click="slideTo(index)"
      )
      li.next(@click="slideNext")
        img(:src="arrowRight")
</template>

<script>
import { Hooper, Slide, Navigation } from "hooper";
import "hooper/dist/hooper.css";
import arrowLeft from "@/assets/arrow_left.svg";
import arrowRight from "@/assets/arrow_right.svg";

export default {
  components: {
    Hooper,
    Slide,
    Navigation
  },
  props: {
    gallery: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      arrowLeft,
      arrowRight,
      hooperSettings: {
        centerMode: true,
        infiniteScroll: true,
        mouseDrag: false,
        touchDrag: false,
        shortDrag: false,
        wheelControl: false
      }
    };
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    slideTo(index) {
      this.$refs.carousel.slideTo(index);
    }
  }
};
</script>

<style lang="sass" scoped>
.gallery
  display: none
  margin-bottom: 50px
  .photo-area
    .hooper
      height: 500px
      .hooper-track
        .hooper-slide
          .photo
            width: 100%
            height: 500px
            background-size: cover
            background-position: center center
  .pagination
    display: flex
    justify-content: center
    align-items: center
    list-style: none
    margin-top: 20px
    .page
      width: 40px
      height: 40px
      background-size: cover
      background-position: center center
      margin: 0 5px
      cursor: pointer
      transition: 0.3s
      &:hover
        opacity: 0.7
    .prev, .next
      background-color: rgba(0, 0, 0, 0.3)
      padding: 13px 13px 10px
      cursor: pointer
      img
        width: 15px
    .prev
      margin-right: 5px
    .next
      margin-left: 5
@media screen and (max-width: 1024px)
  .gallery
    display: block !important
@media screen and (max-width: 480px)
  .gallery
    display: block !important
    .photo-area
      .hooper
        height: 280px
        .hooper-track
          .hooper-slide
            .photo
              height: 280px
</style>
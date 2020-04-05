<template lang="pug">
  li.member-card
    .photo(:style="`background-image: url(${photo})`")
      .name {{ name }}
    .title {{ title }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.member-card
  width: 150px
  margin: 0 15px 30px
  .photo
    width: 150px
    height: 150px
    background-color: grey
    background-size: cover
    background-position: center center
    position: relative
    margin: 0 auto
    .name
      color: white
      font-size: 14px
      background-color: rgba(0, 0, 0, 0.5)
      width: 100%
      padding: 5px 0
      position: absolute
      bottom: 0
  .title
    font-size: 12px
    margin-top: 6px
@media screen and (max-width: 480px)
  .member-card
    width: 90px
    margin: 0 0.35rem 0.7rem
    .photo
      width: 90px
      height: 90px
      .name
        font-size: 0.7rem
    .title
      font-size: 0.6rem
</style>
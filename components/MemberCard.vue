<template lang="pug">
  li#memberCard
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
#memberCard
  margin: 0 15px 30px
  .photo
    width: 150px
    height: 150px
    background-color: grey
    background-size: cover
    background-position: center center
    position: relative
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
</style>
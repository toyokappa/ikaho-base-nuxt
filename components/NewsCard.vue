<template lang="pug">
  li#newsCard
    .header(:style="`background-image: url(${eyeCatch})`")
    .body
      .title {{ title }}
      .meta
        .category {{ category }}
        .created-at {{ createdAt }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    eyeCatch: {
      type: String,
      default: "http://placehold.jp/350x240.png"
    }
  }
}
</script>

<style lang="sass" scoped>
#newsCard
  width: 100%
  height: 250px
  border: 1px solid #B1B3BD
  margin-right: 30px
  box-sizing: border-box
  .header
    height: 160px
    background-size: cover
    background-position: center center
  .body
    height: 90px
    display: flex
    flex-direction: column
    padding: 8px 12px
    .title
      text-align: left
      font-size: 14px
    .meta
      text-align: right
      margin-top: auto
      .category
        display: inline-block
        font-size: 12px
        margin-right: 8px
      .created-at
        display: inline-block
        font-size: 12px
</style>
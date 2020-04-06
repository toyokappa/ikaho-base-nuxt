<template lang="pug">
  li.news-card
    n-link.news-link(:to="`/posts/${id}`")
      .header(:style="`background-image: url(${eyecatch})`")
      .body
        .title {{ truncateTitle }}
        .meta
          .category {{ category }}
          .created-at {{ parseCreatedAt }}
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
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
    eyecatch: {
      type: String,
      required: true
    }
  },
  computed: {
    parseCreatedAt () {
      return this.$dateFormat(this.createdAt, 'yyyy.MM.dd')
    },
    truncateTitle () {
      return this.title.length > 20 ? `${this.title.substring(0, 19)}…` : this.title
    }
  }
};
</script>

<style lang="sass" scoped>
.news-card
  width: 100%
  max-width: 250px
  height: 250px
  border: 1px solid #B1B3BD
  margin-right: 30px
  box-sizing: border-box
  .news-link
    color: black
    text-decoration: none
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
@media screen and (max-width: 480px)
  .news-card
    width: 48%
    margin-right: 2%
    margin-bottom: 10px
</style>
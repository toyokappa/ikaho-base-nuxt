<template lang="pug">
  #post
    h2.page-title
      | 伊香保BASE Official blog
    .title {{ title }}
    .created-at {{ parseCreatedAt }}
    .category {{ category }}
    .eyecatch
      img(:src="eyecatch")
    .content {{ content }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    eyecatch: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    parseCreatedAt () {
      return this.$dateFormat(this.createdAt, 'yyyy.MM.dd')
    }
  }
}
</script>

<style lang="sass" scoped>
#post
  padding: 80px 0
</style>
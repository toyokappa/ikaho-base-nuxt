<template lang="pug">
  .post
    h3.title
      n-link.title-link(:to="`/posts/${id}`") {{ title }}
    .meta
      .category {{ category }}
      | /
      .created-at {{ parseCreatedAt }}
    .eyecatch
      img(:src="eyecatch")
    .content(v-if="isIndex")
      .markdown-body(v-html="$md.render(shortContent)")
      n-link.read-more(:to="`/posts/${id}`")
        | Read More
    .content(v-else)
      .markdown-body(v-html="$md.render(content)")
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
    isIndex: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    parseCreatedAt () {
      return this.$dateFormat(this.createdAt, 'yyyy.MM.dd')
    },
    shortContent () {
      return this.content.length > 80 ? `${this.content.slice(0,80)}...` : this.content
    }
  }
}
</script>

<style lang="sass" scoped>
.post
  .title
    font-size: 30px
    .title-link
      color: inherit
      text-decoration: none
      transition: 0.3s
      &:hover
        opacity: 0.7
  .meta
    display: flex
    margin-bottom: 10px
    .category
      margin-right: 5px
    .created-at
      margin-left: 5px
  .eyecatch
    margin-bottom: 30px
    img
      display: block
      width: 100%
  .read-more
    display: block
    color: inherit
    text-align: right
    margin-top: 15px
    transition: 0.3s
    &:hover
      opacity: 0.7
</style>
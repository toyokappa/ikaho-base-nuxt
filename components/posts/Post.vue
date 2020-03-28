<template lang="pug">
  #post
    .container
      h2
        img.logo(src="@/assets/logo_black.svg")
        .page-title
          | 伊香保BASE Official blog
      .post-area
        .main-content
          h3.title {{ title }}
          .meta
            .category {{ category }}
            | /
            .created-at {{ parseCreatedAt }}
          .eyecatch
            img(:src="eyecatch")
          .content.markdown-body(v-html="$md.render(content)")
        .sub-content
          .categories
            .header
              | Categories
            .body
              ul.side-nav
                li.nav-item
                  a.nav-link(href="#")
                    | All
                li.nav-item
                  a.nav-link(href="#")
                    | Events
                li.nav-item
                  a.nav-link(href="#")
                    | Info
                li.nav-item
                  a.nav-link(href="#")
                    | Blog
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
  .container
    width: 1080px
    margin: 0 auto
    h2
      display: flex
      align-items: center
      .logo
        display: block
        width: 30px
        margin-right: 3px
    .post-area
      display: flex
      .main-content
        width: 70%
        margin-right: 5%
        .title
          font-size: 30px
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
      .sub-content
        width: 25%
        .categories
          border: 1px solid black
          .header
            padding: 10px
            border-bottom: 1px solid black
          .body
            padding: 10px
            .side-nav
              list-style: none
              .nav-item
                margin-bottom: 10px
                &:last-child
                  margin: 0
                .nav-link
                  color: inherit
                  text-decoration: none
</style>
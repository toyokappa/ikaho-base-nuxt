<template lang="pug">
  #app
    GlobalHeader
    .container
      ContentHeader
      .post-area
        .posts
          Post(
            :id="post.sys.id"
            :title="post.fields.title"
            :createdAt="post.sys.createdAt"
            :category="post.fields.category"
            :eyecatch="post.fields.eyecatch.fields.file.url"
            :content="post.fields.content"
          )
        SideNav
    GlobalFooter
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import ContentHeader from '@/components/posts/ContentHeader.vue'
import Post from '@/components/posts/Post'
import SideNav from '@/components/posts/SideNav.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'


export default {
  components: {
    GlobalHeader,
    ContentHeader,
    Post,
    SideNav,
    GlobalFooter
  },
  async asyncData ({ app, params }) {
    const postId = params.id
    const post = await app.$ctfClient.getEntry(postId)
    return { post }
  }
}
</script>

<style lang="sass">
.container
  width: 100%
  max-width: 1080px
  padding: 80px 0
  margin: 0 auto
  .post-area
    display: flex
    .posts
      width: 70%
      margin-right: 5%
@media screen and (max-width: 1024px)
  .container
    .post-area
      display: block !important
      .posts
        width: 100% !important
        margin-right: 0 !important
@media screen and (max-width: 480px)
  .container
    padding: 40px 0
    .post-area
      display: block !important
      .posts
        width: 100% !important
        margin-right: 0 !important
</style>
<template lang="pug">
  #app
    GlobalHeader
    .container
      ContentHeader
      .post-area
        .posts
          Post.post-section(
            v-for="post in posts"
            :key="post.sys.id"
            :id="post.sys.id"
            :title="post.fields.title"
            :createdAt="post.sys.createdAt"
            :category="post.fields.category"
            :eyecatch="post.fields.eyecatch.fields.file.url"
            :content="post.fields.content"
            :isIndex="true"
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
  async asyncData ({ app, params, query }) {
    const MAX_POSTS = 5
    const page = parseInt(query.page) || 1
    const category = query.category || ''

    const postRes = await app.$ctfClient.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
      skip: MAX_POSTS * (page - 1),
      limit: MAX_POSTS,
      'fields.category': category
    })
    return { posts: postRes.items }
  },
  watchQuery: ['page', 'category']
}
</script>

<style lang="sass">
.container
  width: 1080px
  padding: 80px 0
  margin: 0 auto
  .post-area
    display: flex
    .posts
      width: 70%
      margin-right: 5%
      .post-section
        padding-bottom: 50px
        border-bottom: 1px solid #B1B3BD
        margin-bottom: 50px
        &:last-child
          padding-bottom: 0
          border: 0
          margin: 0
</style>
<template lang="pug">
  #app
    GlobalHeader
    Post(
      :title="post.fields.title"
      :createdAt="post.sys.createdAt"
      :category="post.fields.category"
      :eyecatch="post.fields.eyecatch.fields.file.url"
      :content="post.fields.content"
    )
    GlobalFooter
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import Post from '@/components/posts/Post'
import GlobalFooter from '@/components/GlobalFooter.vue'


export default {
  components: {
    GlobalHeader,
    Post,
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
</style>
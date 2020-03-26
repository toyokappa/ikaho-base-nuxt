<template lang="pug">
  .news
    ul.content-list
      NewsCard(
        v-for="news in newsList"
        :key="news.sys.id"
        :title="news.fields.title"
        :eyecatch="news.fields.eyecatch.fields.file.url"
        :category="news.fields.category"
        :createdAt="news.sys.createdAt"
      )
</template>

<script>
import NewsCard from '@/components/index/NewsCard.vue'

export default {
  components: {
    NewsCard
  },
  data () {
    return {
      newsList: []
    }
  },
  async mounted () {
    const postRes = await this.$ctfClient.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
      limit: 4
    })
    this.newsList = postRes.items
  }
}
</script>

<style lang="sass" scoped>
.news
  text-align: center
  .content-list
    display: flex
    list-style: none
    box-sizing: border-box
    margin-right: -30px
</style>
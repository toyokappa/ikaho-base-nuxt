<template lang="pug">
  .news
    ul.content-list
      NewsCard(
        v-for="news in newsList"
        :key="news.sys.id"
        :id="news.sys.id"
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
  props: {
    newsList: {
      type: Array,
      required: true
    }
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

@media screen and (max-width: 480px)
  .content-list
    flex-wrap: wrap
    margin-right: 0 !important
    margin-left: 2%
</style>
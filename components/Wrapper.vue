<template lang="pug">
  #wrapper
    .main-content
      section.corner
        News
          NewsCard(
            v-for="post in posts"
            :key="post.sys.id"
            :title="post.fields.title"
            :category="post.fields.category"
            :createdAt="post.sys.createdAt"
            :eyecatch="post.fields.eyecatch.fields.file.url"
          )
      section.corner
        About
      section.corner
        #member
          h3.label
            | Member
          ul.members
            MemberCard(
              v-for="member in members"
              :key="member.fields.memberId"
              :name="member.fields.name"
              :title="member.fields.title"
              :photo="memberPhoto(member)"
            )
      section.corner
        Access
</template>

<script>
import noPhotoMember from '@/assets/no_photo_member.jpg'

import News from '@/components/News.vue'
import NewsCard from '@/components/NewsCard.vue'
import About from '@/components/About.vue'
import MemberCard from '@/components/MemberCard.vue'
import Access from '@/components/Access.vue'

export default {
  components: {
    News,
    NewsCard,
    About,
    MemberCard,
    Access
  },
  data () {
    return {
      posts: [],
      members: []
    }
  },
  async created () {
    const postRes = await this.$ctfClient.getEntries({
      content_type: 'post',
      order: '-sys.createdAt'
    })
    this.posts = postRes.items

    const memberRes = await this.$ctfClient.getEntries({
      content_type: 'member',
      order: 'fields.memberId'
    })
    this.members = memberRes.items
  },
  methods: {
    memberPhoto (member) {
      return member.fields.photo ? member.fields.photo.fields.file.url : noPhotoMember
    }
  }
}
</script>

<style lang="sass" scoped>
#wrapper
  padding: 80px 0
  .main-content
    width: 100%
    max-width: 1080px
    margin: 0 auto
    section.corner
      margin-bottom: 100px
      #member
        text-align: center
        .label
          margin-bottom: 30px
        .members
          display: flex
          justify-content: center
          flex-wrap: wrap
          list-style: none
          box-sizing: border-box
</style>
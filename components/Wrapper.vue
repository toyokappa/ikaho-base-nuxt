<template lang="pug">
  #wrapper
    .main-content
      section
        Label
          | News
        .corner
          News
            NewsCard(
              v-for="post in posts"
              :key="post.sys.id"
              :title="post.fields.title"
              :category="post.fields.category"
              :createdAt="post.sys.createdAt"
              :eyecatch="post.fields.eyecatch.fields.file.url"
            )
      section
        Label
          | About
        Gallery.gallery(:photos="gallery")
        .corner
          About
      section
        Label
          | Member
        .corner
          #member
            ul.members
              MemberCard(
                v-for="member in members"
                :key="member.fields.memberId"
                :name="member.fields.name"
                :title="member.fields.title"
                :photo="memberPhoto(member)"
              )
      section
        Label
          | Access
        .corner
          Access
      section
        Label
          | Contact
        .corner
          Contact
</template>

<script>
import noPhotoMember from '@/assets/no_photo_member.jpg'

import Label from '@/components/Label.vue'
import News from '@/components/News.vue'
import NewsCard from '@/components/NewsCard.vue'
import Gallery from '@/components/Gallery.vue'
import About from '@/components/About.vue'
import MemberCard from '@/components/MemberCard.vue'
import Access from '@/components/Access.vue'
import Contact from '@/components/Contact.vue'

export default {
  components: {
    Label,
    News,
    NewsCard,
    Gallery,
    About,
    MemberCard,
    Access,
    Contact
  },
  data () {
    return {
      posts: [],
      members: [],
      gallery: [],
    }
  },
  async created () {
    const postRes = await this.$ctfClient.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
      limit: 4
    })
    this.posts = postRes.items

    const memberRes = await this.$ctfClient.getEntries({
      content_type: 'member',
      order: 'fields.memberId'
    })
    this.members = memberRes.items

    const galleryRes = await this.$ctfClient.getEntries({
      content_type: 'gallery'
    })
    this.gallery = galleryRes.items[0].fields.photos
    console.log(this.gallery)
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
    .corner
      max-width: 1080px
      margin: 0 auto 100px
      #member
        text-align: center
        .members
          display: flex
          justify-content: center
          flex-wrap: wrap
          list-style: none
          box-sizing: border-box
</style>
<template lang="pug">
  #wrapper
    .main-content
      section.corner
        News
          NewsCard(
            title="アラジンストーブ入荷のお知らせ"
            category="Shopping"
            createdAt="2020.03.17"
            eyeCatch="https://aladdin-aic.com/views/uploads/2018/04/main_2-5.jpg"
          )
          NewsCard(
            title="クラフトビールフェスタ開催決定！"
            category="Event"
            createdAt="2020.03.14"
            eyeCatch="https://yonasato.com/ec_img/craft_img/top/toppic_01.png"
          )
          NewsCard(
            title="イノちゃんのアメリカ横断ロードムービー試写会"
            category="Movie"
            createdAt="2020.03.10"
            eyeCatch="https://hataraku.vivivit.com/wp-content/uploads/2017/01/SETDESIGN1-1-768x461.jpg"
          )
          NewsCard(
            title="みんなで行く軽井沢ソロキャンプ"
            category="Tour"
            createdAt="2020.03.10"
            eyeCatch="https://media.alpen-group.jp/cms/magazine/assets/img/uploads/2018/outdoor/190905_outdoor_image1.jpeg"
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
              :key="member.sys.id"
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
      members: null
    }
  },
  async created () {
    const res = await this.$ctfClient.getEntries({
      content_type: 'member',
      order: 'fields.memberId'
    })
    this.members = res.items
    console.log(this.members)
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
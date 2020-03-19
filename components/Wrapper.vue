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
              name="伊藤 直哉"
              title="メインオーナー"
              photo="https://static.camp-fire.jp/uploads/editor_uploaded_image/image/203705/DSCN0311.jpg"
            )
            MemberCard(
              name="名口 正伸"
              title="BASEマネージャー"
              photo="https://scontent.fkix2-1.fna.fbcdn.net/v/t1.0-9/10338332_808144609276736_5156808848998067851_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=gJy-rU3P-JsAX9vVIIX&_nc_ht=scontent.fkix2-1.fna&oh=eec635bd43c5b2fc2906b4e56fd3ac61&oe=5E988BD1"
            )
            MemberCard(
              name="長澤 一生"
              title="Jumanji オーナー"
              photo="https://cdn5.vectorstock.com/i/thumb-large/86/39/default-placeholder-fitness-trainer-in-a-t-shirt-vector-21188639.jpg"
            )
            MemberCard(
              name="イノ ユウスケ"
              title="旅するミュージシャン"
              photo="https://static.camp-fire.jp/uploads/editor_uploaded_image/image/499284/E9DE7E5E-3918-41B5-AA6A-7C42D2C36274.jpeg"
            )
            MemberCard(
              name="岡村 健汰"
              title="インテリメガネ"
              photo="https://cdn1.vectorstock.com/i/thumb-large/19/00/default-placeholder-businessman-half-length-portr-vector-21171900.jpg"
            )
            MemberCard(
              name="豊川 雄太"
              title="エンジニア & マーケター"
              photo="https://scontent.fkix2-1.fna.fbcdn.net/v/t1.0-9/p960x960/89584148_2788596257891388_6581817672067973120_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=5Wg_Nbjo7NkAX-KH0sv&_nc_ht=scontent.fkix2-1.fna&_nc_tp=6&oh=6c1b9d8fc1c88de6d0ef8a370ca5cece&oe=5E979299"
            )
      section.corner
        Access
</template>

<script>
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
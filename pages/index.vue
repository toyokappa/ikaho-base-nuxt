<template lang="pug">
  #app
    GlobalHeader
    PageTop
    #wrapper
      .main-content
        section
          Label#news
            | News
          .corner
            News(:newsList="newsList")
        section
          Label#about
            | About
          Gallery(:gallery="gallery")
          .corner
            About
        section
          Label#member
            | Member
          .corner
            Member(:members="members")
        section
          Label#access
            | Access
          .corner
            Access
        section
          Label#contact
            | Contact
          .corner
            Contact
    GlobalFooter
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import PageTop from '@/components/index/PageTop.vue'
import Label from '@/components/Label.vue'
import News from '@/components/index/News.vue'
import Gallery from '@/components/index/Gallery.vue'
import About from '@/components/index/About.vue'
import Member from '@/components/index/Member.vue'
import Access from '@/components/index/Access.vue'
import Contact from '@/components/index/Contact.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

export default {
  components: {
    GlobalHeader,
    PageTop,
    Label,
    News,
    News,
    Gallery,
    About,
    Member,
    Access,
    Contact,
    GlobalFooter
  },
  async asyncData ({ app }) {

    const postRes = await app.$ctfClient.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
      limit: 4
    })
    const newsList = postRes.items

    const galleryRes = await app.$ctfClient.getEntries({
      content_type: 'gallery'
    })
    const gallery = galleryRes.items[0].fields.photos

    const memberRes = await app.$ctfClient.getEntries({
      content_type: 'member',
      order: 'fields.memberId'
    })
    const members = memberRes.items

    return {
      newsList,
      gallery,
      members
    }
  }
}
</script>

<style lang="sass">
#wrapper
  padding: 80px 0
  .main-content
    width: 100%
    .corner
      max-width: 1080px
      margin: 0 auto 100px
</style>
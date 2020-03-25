<template lang="pug">
  #wrapper
    .main-content
      section
        Label
          | News
        .corner
          News
      section
        Label
          | About
        Gallery
        .corner
          About
      section
        Label
          | Member
        .corner
          Member
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
import Label from '@/components/Label.vue'
import News from '@/components/News.vue'
import Gallery from '@/components/Gallery.vue'
import About from '@/components/About.vue'
import Member from '@/components/Member.vue'
import Access from '@/components/Access.vue'
import Contact from '@/components/Contact.vue'

export default {
  components: {
    Label,
    News,
    News,
    Gallery,
    About,
    Member,
    Access,
    Contact
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
</style>
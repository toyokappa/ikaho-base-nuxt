<template lang="pug">
  #globalHeader
    nav
      IndexHeaderNav(v-if="$route.path === '/'")
      PageHeaderNav(v-else)
</template>

<script>
import IndexHeaderNav from '@/components/IndexHeaderNav.vue'
import PageHeaderNav from '@/components/PageHeaderNav.vue'

export default {
  components: {
    IndexHeaderNav,
    PageHeaderNav
  }
}
</script>

<style lang="sass" scoped>
#globalHeader
  background-color: #1F2233
  width: 100%
  position: fixed
  top: 0
  opacity: 0.8
  z-index: 100
  nav
    max-width: 780px
    width: 100%
    padding: 5px 0
    margin: 0 auto
</style>
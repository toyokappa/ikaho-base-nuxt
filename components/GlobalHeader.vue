<template lang="pug">
  #globalHeader
    .pc-header
      nav
        IndexHeaderNav(v-if="$route.path === '/'")
        PageHeaderNav(v-else)
    .mb-header
      .button
        client-only
          tasty-burger-button(
            type="spin"
            color="#B1B3BD"
            size="s"
            @toggle="toggleMbNav"
            ref="burgerButton"
          )
      IndexHeaderNav#mbNav(
        v-if="$route.path === '/'"
        style="visibility: hidden; opacity: 0;"
        @toggleActive="toggleActive"
      )
      PageHeaderNav#mbNav(
        v-else
        style="visibility: hidden; opacity: 0;"
        @toggleActive="toggleActive"
      )
</template>

<script>
import IndexHeaderNav from '@/components/IndexHeaderNav.vue'
import PageHeaderNav from '@/components/PageHeaderNav.vue'

export default {
  components: {
    IndexHeaderNav,
    PageHeaderNav,
  },
  methods: {
    toggleMbNav (active) {
      const nav = document.querySelector('#mbNav')
      nav.style.visibility = active ? 'visible' : 'hidden'
      nav.style.opacity = active ? '1' : '0'
    },
    toggleActive () {
      this.$refs.burgerButton.toggle()
    }
  }
}
</script>

<style lang="sass" scoped>
@media screen and (min-width: 481px)
  #globalHeader
    .pc-header
      display: block
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
    .mb-header
      display: none

@media screen and (max-width: 480px)
  #globalHeader
    .pc-header
      display: none
    .mb-header
      .button
        display: block
        padding: 14.5px 10.5px
        background-color: rgba(31, 34, 51, 0.8)
        position: fixed
        top: 10px
        right: 10px
        z-index: 100
      #mbNav
        transition: 0.3s
</style>
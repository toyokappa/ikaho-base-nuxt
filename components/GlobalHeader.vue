<template lang="pug">
  #globalHeader
    nav
      ul.nav
        li.nav-item
          a.nav-link.logo(href="#" v-scroll-to="'#pageTop'")
            img(src="@/assets/logo_white.svg")
        li.nav-item
          n-link.nav-link(v-scroll-to="'#news'" to)
            | News
        li.nav-item
          n-link.nav-link(v-scroll-to="'#about'" to)
            | About
        li.nav-item
          n-link.nav-link(v-scroll-to="'#member'" to)
            | Member
        li.nav-item
          n-link.nav-link(v-scroll-to="'#access'" to)
            | Access
        li.nav-item
          n-link.nav-link(v-scroll-to="'#contact'" to)
            | Contact
</template>

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
    .nav
      display: flex
      justify-content: space-between
      align-items: center
      list-style: none
      .nav-item
        .nav-link
          color: white
          text-decoration: none
          transition: 0.3s
          &:hover
            opacity: 0.7
        .logo
          img
            width: 30px
</style>
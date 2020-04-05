<template lang="pug">
  ul.nav(@click="$emit('toggleActive')")
    li.nav-item
      n-link.nav-link.logo(v-scroll-to="'#pageTop'" to)
        img(src="@/assets/logo_white.svg")
      n-link.nav-link.text(v-scroll-to="'#pageTop'" to)
        | Home
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
@media screen and (min-width: 481px)
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
      .text
        display: none

@media screen and (max-width: 480px)
  .nav
    display: block
    list-style: none
    width: calc(100% - 20px)
    margin: 10px 10px 0
    position: fixed
    top: 60px
    z-index: 100
    .nav-item
      text-align: center
      background-color: rgba(31, 34, 51, 0.8)
      border-bottom: 1px solid #B1B3BD
      &:last-child
        border-bottom: none
      .nav-link
        display: block
        color: white
        text-decoration: none
        padding: 20px 0
      .logo
        display: none
</style>
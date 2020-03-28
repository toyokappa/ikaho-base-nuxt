<template lang="pug">
  ul.nav
    li.nav-item
      n-link.nav-link.logo(v-scroll-to="'#pageTop'" to)
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
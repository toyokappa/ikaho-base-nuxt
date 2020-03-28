<template lang="pug">
  ul.nav
    li.nav-item
      n-link.nav-link.logo(to="/")
        img(src="@/assets/logo_white.svg")
    li.nav-item
      n-link.nav-link(to="/#news")
        | News
    li.nav-item
      n-link.nav-link(to="/#about")
        | About
    li.nav-item
      n-link.nav-link(to="/#member")
        | Member
    li.nav-item
      n-link.nav-link(to="/#access")
        | Access
    li.nav-item
      n-link.nav-link(to="/#contact")
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
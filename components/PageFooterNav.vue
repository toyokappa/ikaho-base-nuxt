<template lang="pug">
  ul.nav
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
  justify-content: center
  align-items: center
  list-style: none
  margin-bottom: 25px
  .nav-item
    margin: 0 15px
    .nav-link
      color: #B1B3BD
      text-decoration: none
      transition: 0.3s
      &:hover
        opacity: 0.7
</style>
<template lang="pug">
  #sideNav
    .categories
      .header
        | Categories
      .body
        ul.side-nav
          li.nav-item
            n-link.nav-link(to="/posts")
              | All
          li.nav-item
            n-link.nav-link(to="/posts?category=Events")
              | Events
          li.nav-item
            n-link.nav-link(to="/posts?category=Info")
              | Info
          li.nav-item
            n-link.nav-link(to="/posts?category=Blog")
              | Blog
</template>

<style lang="sass" scoped>
#sideNav
  width: 25%
  .categories
    border: 1px solid black
    .header
      padding: 10px
      border-bottom: 1px solid black
    .body
      padding: 10px
      .side-nav
        list-style: none
        .nav-item
          margin-bottom: 10px
          &:last-child
            margin: 0
          .nav-link
            color: inherit
            text-decoration: none
@media screen and (max-width: 1024px)
  #sideNav
    width: 100%
    padding: 0 10px
    margin-top: 50px
</style>
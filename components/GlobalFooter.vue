<template lang="pug">
  #globalFooter
    .main-content
      nav.footer-nav
        ul.nav
          li.nav-item
            a.nav-link(href="#")
              | ABOUT
          li.nav-item
            a.nav-link(href="#")
              | ACCESS
          li.nav-item
            a.nav-link(href="#")
              | EVENT
          li.nav-item
            a.nav-link(href="#")
              | CONTACT
      nav.sns-nav
        ul.nav
          li.nav-item
            a.nav-link(href="#")
              img(src="@/assets/insta_icon.svg")
          li.nav-item
            a.nav-link(href="#")
              img(src="@/assets/facebook_icon.svg")
          li.nav-item
            a.nav-link(href="#")
              img(src="@/assets/twitter_icon.svg")
      .copyright
        | &copy; 2020 IKAHO BASE
</template>

<style lang="sass" scoped>
#globalFooter
  background-color: #1F2233
  color: #B1B3BD
  text-align: center
  .main-content
    padding: 30px 0
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
    .sns-nav
      img
        display: block
        width: 30px
        transition: 0.3s
        &:hover
          opacity: 0.7
    .copyright
</style>
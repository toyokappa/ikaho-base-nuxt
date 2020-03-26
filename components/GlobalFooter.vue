<template lang="pug">
  #globalFooter
    .main-content
      nav.footer-nav
        ul.nav
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
      nav.sns-nav
        ul.nav
          li.nav-item
            a.nav-link(href="https://www.instagram.com/explore/tags/%E4%BC%8A%E9%A6%99%E4%BF%9Dbase/" target="_blank")
              img(src="@/assets/insta_icon.svg")
          li.nav-item
            a.nav-link(href="https://www.facebook.com/%E4%BC%8A%E9%A6%99%E4%BF%9Dbase-112756527024469/" target="_blank")
              img(src="@/assets/facebook_icon.svg")
          li.nav-item
            a.nav-link(href="https://twitter.com/search?q=%23%E4%BC%8A%E9%A6%99%E4%BF%9Dbase&src=typed_query&f=live" target="_blank")
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
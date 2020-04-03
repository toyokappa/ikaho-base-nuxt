<template lang="pug">
  h2
    n-link.page-title-link(to="/posts")
      img.logo(src="@/assets/logo_black.svg")
      .page-title
        | 伊香保BASE Official blog
</template>

<style lang="sass" scoped>
h2
  .page-title-link
    display: flex
    align-items: center
    color: inherit
    text-decoration: none
    transition: 0.3s
    &:hover
      opacity: 0.7
    .logo
      display: block
      width: 30px
      margin-right: 3px
@media screen and (max-width: 480px)
  h2
    margin: 0 10px
</style>
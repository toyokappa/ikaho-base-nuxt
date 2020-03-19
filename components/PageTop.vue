<template lang="pug">
  #pageTop
    .main-content
      .logo
        img(src="@/assets/logo_white.svg")
      h1.title
        | 伊香保BASE
      h2.subtitle
        | &:freedom
</template>

<style lang="sass" scoped>
#pageTop
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  background-image: url('http://gooma.jp/wp-content/uploads/2019/06/IMG_0166-940x627.jpg')
  background-size: cover
  background-potion: center center
  .main-content
    text-align: center
    .logo
      img
        width: 300px
    .title
      color: white
    .subtitle
      color: white
</style>
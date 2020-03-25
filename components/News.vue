<template lang="pug">
  #news
    ul.content-list
      slot
</template>

<style lang="sass" scoped>
#news
  text-align: center
  .content-list
    display: flex
    list-style: none
    box-sizing: border-box
    margin-right: -30px
</style>
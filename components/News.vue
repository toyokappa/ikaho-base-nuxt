<template lang="pug">
  #news
    h3.label
      | News
    ul.content-list
      slot
</template>

<style lang="sass" scoped>
#news
  text-align: center
  .label
    margin-bottom: 30px
  .content-list
    display: flex
    list-style: none
    box-sizing: border-box
    margin-right: -30px
</style>
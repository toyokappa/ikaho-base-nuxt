<template lang="pug">
  #app
    PageTop
    Wrapper
    GlobalFooter
</template>

<script>
import PageTop from '@/components/PageTop.vue'
import Wrapper from '@/components/Wrapper.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

export default {
  components: {
    PageTop,
    Wrapper,
    GlobalFooter
  }
}
</script>

<style lang="sass">
</style>
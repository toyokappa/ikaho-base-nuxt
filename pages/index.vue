<template lang="pug">
  #app
    GlobalHeader
    PageTop
    Wrapper
    GlobalFooter
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import PageTop from '@/components/index/PageTop.vue'
import Wrapper from '@/components/index/Wrapper.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

export default {
  components: {
    GlobalHeader,
    PageTop,
    Wrapper,
    GlobalFooter
  }
}
</script>

<style lang="sass">
</style>
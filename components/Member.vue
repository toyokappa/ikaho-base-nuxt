<template lang="pug">
  .member
    ul.members
      MemberCard(
        v-for="member in members"
        :key="member.fields.memberId"
        :name="member.fields.name"
        :title="member.fields.title"
        :photo="memberPhoto(member)"
      )
</template>

<script>
import noPhotoMember from '@/assets/no_photo_member.jpg'
import MemberCard from '@/components/MemberCard.vue'

export default {
  components: {
    MemberCard
  },
  data () {
    return {
      members: []
    }
  },
  async mounted () {
    const memberRes = await this.$ctfClient.getEntries({
      content_type: 'member',
      order: 'fields.memberId'
    })
    this.members = memberRes.items
  },
  methods: {
    memberPhoto (member) {
      return member.fields.photo ? member.fields.photo.fields.file.url : noPhotoMember
    }
  }
}
</script>

<style lang="sass" scoped>
.member
  text-align: center
  .members
    display: flex
    justify-content: center
    flex-wrap: wrap
    list-style: none
    box-sizing: border-box
</style>
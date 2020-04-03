<template lang="pug">
  .contact
    form.form(@submit='sendMail')
      .row
        .group
          input#senderName.field(
            type="text"
            required
            v-model="contactForm.name"
            @change="checkFieldValue"
          )
          label.form-label(for="senderName")
            | Name
        .group
          input#senderEmail.field(
            type="email"
            required
            v-model="contactForm.email"
            @change="checkFieldValue"
          )
          label.form-label(for="senderEmail")
            | E-mail
      .group
        textarea#senderMessage.field(
          rows="1"
          required
          v-model="contactForm.message"
          @change="checkFieldValue"
          @input="changeFieldHeight"
        )
        label.form-label(for="senderMessage")
          | Message
      .action
        input.submit(type="submit" value="Submit")
</template>

<script>
export default {
  data () {
    return {
      messageLineHeight: null,
      messageBorderHeight: null,
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted () {
    const messageArea = document.querySelector('#senderMessage')
    const messageStyles = getComputedStyle(messageArea)
    this.messageLineHeight = parseInt(messageStyles.getPropertyValue('line-height'))
    this.messageBorderHeight = parseInt(messageStyles.getPropertyValue('border-bottom'))
  },
  methods: {
    checkFieldValue (e) {
      const target = e.target
      target.value ? target.classList.add('not-empty') : target.classList.remove('not-empty')
    },
    changeFieldHeight (e) {
      const target = e.target
      const lines = `${target.value}\n`.match(/\n/g).length
      target.style.height = `${(this.messageLineHeight * lines) + this.messageBorderHeight}px`
    },
    async sendMail (e) {
      e.preventDefault()
      const mailer = this.$firebaseFunctions.httpsCallable('sendMail')
      try {
        await mailer(this.contactForm)
        this.$toast.success('お問い合わせを受け付けました。ありがとうございました。', { duration: 5000 })
        this.resetForm()
      } catch (err) {
        this.$toast.error('お問い合わせに失敗しました。時間をおいて再度お試しください。', { duration: 5000 })
        console.log(err)
        throw err
      }
    },
    resetForm () {
      this.contactForm = { name: '', email: '', message: '' }
      document.querySelector('#senderMessage').style.height = `${this.messageLineHeight + this.messageBorderHeight}px`
      document.querySelectorAll('.field').forEach(field => field.classList.remove('not-empty'))
    }
  }
}
</script>

<style lang="sass" scoped>
.contact
  max-width: 780px
  margin: 0 auto
  .form
    margin-top: 50px
    .row
      display: flex
      margin-left: -30px
      .group
        margin-left: 30px
    .group
      position: relative
      width: 100%
      margin-bottom: 60px
      textarea
        resize: none
      .field
        display: block
        font-size: 18px
        line-height: 28px
        width: 100%
        border-bottom: 2px solid #1F2233
        &:focus
          outline: none
        &:focus,
        &.not-empty
          + .form-label
            top: -28px
            bottom: 0px
      .form-label
        position: absolute
        top: 0px
        bottom: 11px
        color: #B1B3BD
        font-size: 18px
        line-height: 28px
        cursor: text
        transition: 0.2s
    .action
      .submit
        display: block
        letter-spacing: 2px
        padding: 15px 30px
        border: 1px solid #1F2233
        margin-left: auto
        transition: 0.3s
        &:hover
          color: white
          background-color: #1F2233
@media screen and (max-width: 480px)
  .contact
    padding: 0 10px
</style>
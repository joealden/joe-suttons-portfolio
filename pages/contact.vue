<template>
  <div class="center-wrapper">
    <div id="contact-wrapper">
      <div id="info">
        <h1>Contact</h1>
        <p id="first-paragraph">
          If you're contacting me about work, then it'd be great if you could
          include the details of the project, budget, deadline etc. to help
          speed up the process. Also feel free to get in touch if you have any
          questions.
        </p>
        <p id="second-paragraph">
          If you would rather not use the form, you can email
          me directly: <a href="mailto:hi@joesutton.co">hi@joesutton.co</a>
        </p>
      </div>
      <form>
        <label for="name">Name</label>
        <input v-model.lazy.trim="name" type="text" id="name">

        <label for="email">Email Address</label>
        <input v-model.lazy.trim="email" type="email" id="email">

        <label for="subject">Subject</label>
        <input v-model.lazy.trim="subject" type="text" id="subject">

        <label for="message">Message</label>
        <textarea
          v-model.lazy.trim="message"
          name="message"
          id="message"
          placeholder="Let me know all the details as well as timeline and budget..."
        />

        <button @click.prevent="submitForm">
          <span>Send</span> &gt;
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },

  methods: {
    submitForm() {
      console.log('submit')
    }
  }
}
</script>


<style lang="stylus" scoped>
#contact-wrapper
  margin 10rem 4rem 5rem 4rem
  display grid
  grid-template-columns 1fr 1fr

#info
  h1
    font-size 50px

  p
    width 450px
    color #707070
    line-height 30px

  #first-paragraph
    margin 4rem 0 6rem 0

  #second-paragraph
    a
      color black

form
  display flex
  flex-direction column

  label
    margin-bottom 0.75rem
    font-size 22px

    &[for='email'], &[for='subject'], &[for='message']
      margin-top 1.25rem

  input, textarea
    border 2px solid #EAEAEA
    padding 1rem
    outline none
    transition 0.15s ease-in-out

    &:focus
      border 2px solid black

  textarea
    resize none
    height 12rem

  button
    text-align right
    margin-top 1rem
    font-size 30px

    span
      font-size 30px
      display inline-block
      transition 0.15s ease-in-out

    &:hover, &:focus
      span
        transform translateX(-0.5rem)
</style>

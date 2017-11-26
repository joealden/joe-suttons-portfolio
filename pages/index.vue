<template>
  <div>
    <div id="title-projects-wrapper">
      <div id="title">
        <h3>Joe Sutton</h3>
        <h1>Freelance Digital and Brand Designer</h1>
      </div>
      <section id="projects">
        <div id="projects-title">
          <h2>Projects</h2>
        </div>
        <div id="image-grid">
        </div>
      </section>
    </div>
    <section id="contact">
      Have a project in mind, or just a question?
      <nuxt-link to="/contact">Get in Touch</nuxt-link>
    </section>
    <footer>
      <span>Joe Sutton - Freelance Digital and Brand Designer</span>
      <button @click="scrollToTop">Back to Top</button>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
#title-projects-wrapper
  margin 10rem 4rem 5rem 4rem

#title
  h3
    padding-bottom 0.25rem
    font-size 22px
    color #949494

  h1
    font-size 50px
    width 419px
    line-height 60px

#projects
  margin-top 0.5rem

  #projects-title
    display flex

    h2
      font-size 30px
      text-align right

    &::before
      align-self flex-end
      margin 0 2rem 6px 0
      content ''
      display inline-block
      width 100%
      height 2px
      background-color #F2F2F2

  #image-grid
    background-color grey
    margin-top 5rem
    height 25rem

#contact
  background-color #0C0C0C
  color #5E5E5E
  font-size 30px
  padding 8rem 0
  text-align center

  a
    color white
    font-size 30px

footer
  display flex
  justify-content space-between
  color #959595
  margin 1.5rem 4rem

  button
    color #959595
</style>

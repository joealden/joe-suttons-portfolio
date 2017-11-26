<template>
  <div>
    <div class="center-wrapper">
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
            <project-item 
              src="images/umoro.jpg"
              alt="Man in a hooded coat with a hat on"
              title="Umoro"
              info="A Random Snippet of info on the Work"
            />
            <project-item 
              src="images/stab-mag.jpg"
              alt="A beach with surfers"
              title="Stab Mag"
              info="A Random Snippet of info on the Work"
            />
            <project-item 
              src="images/counted.jpg"
              alt="A salad on a plate with a fork"
              title="Counted"
              info="A Random Snippet of info on the Work"
            />
            <project-item 
              src="images/logos-lettering.jpg"
              alt="A dark background"
              title="Logos and Lettering"
              info="A Random Snippet of info on the Work"
            />
          </div>
        </section>
      </div>
    </div>
    <section id="contact">
      Have a project in mind, or just a question?
      <nuxt-link to="/contact">Get in Touch</nuxt-link>
    </section>
    <div class="center-wrapper">
    <footer>
      <span>Joe Sutton - Freelance Digital and Brand Designer</span>
      <button @click="scrollToTop">Back to Top</button>
    </footer>
    </div>
  </div>
</template>

<script>
import ProjectItem from '~/components/ProjectItem'

export default {
  components: { ProjectItem },

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
    margin-top 5rem
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 4rem

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

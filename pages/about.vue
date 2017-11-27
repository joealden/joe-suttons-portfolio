<template>
  <div class="center-wrapper">
    <div id="center">
      <header>
        <button @click="closeAbout">X Close</button>
        <nuxt-link to="/">
          <img src="/images/logo-white.svg" alt="Logo">
        </nuxt-link>
      </header>
      <div id="center-main">
        <p id="main-copy">
          Delivering bold design solutions that balance
          form and function. Helping to tell your brand's
          story, and aiding your business reach its goals.
        </p>
        <div id="columns">
          <div id="about-me">
            <h2>About Me</h2>
            <p>
              I’m a Freelance Designer based near London, who specialises
              in branding and digital design work. I’ve worked with companies of
              all sizes, from all across the world. Helping bring their ideas to
              life or being a part of their brands evolution
            </p>
            <div>
              <a href="https://twitter.com/JosephSutton">Twitter</a> -
              <a href="https://www.instagram.com/josephsutton_">Instagram</a> -
              <a href="https://dribbble.com/JoeSutton">Dribbble</a> -
              <a href="https://www.facebook.com/joe.sutton.581">Facebook</a> -
              <a href="https://www.behance.net/JoeSutton">Behance</a> 
            </div>
          </div>
          <div id="services">
            <h2>Services</h2>
            <p>
              Digtial Design, User Interface Design, User Experience Design,
              Editorial Design, Branding, Lettering, Iconography, Project
              Management, Strategy. 
            </p>
            <p>
              I’ve probably missed some thigns so get in touch. Even if I can’t
              provide the service you’re after I know lots of people that can
              help.  I’m more than happy to put a team together. to get the
              work done under one project, taking the stress away from you
              finding people you can trust. 
            </p>
          </div>
          <div id="testimonials">
            <h2>Testimonials</h2>
            <p>
              "We commissioned Joe to refresh our wordmark and he hit it out
              of the park. He was very easy to work with along the way,
              notifying us of his work schedule and when to expect updates.
              He listened to our revision requests and ultimately delivered a
              great new identity for our brand. If you are in the market for a
              new creative wordmark for your brand, Joe is your man."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: 'none',
  methods: {
    closeAbout() {
      // TODO: If 'about' page is the first to be visited, go to home page
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
#center
  border-top 5px solid black
  padding 0 4rem 4rem 4rem

header
  button
    color white
    background-color black
    font-size 22px

  img
    height 1.5rem

  display flex
  justify-content space-between
  padding 1.5rem 0

#center-main
  display flex
  flex-direction column
  justify-content center

#main-copy
  font-size 50px
  width 915px
  margin 10rem 0

#columns
  display grid
  grid-template-columns 1fr 1fr 1fr
  grid-gap 7rem

  h2
    font-size 30px
    margin-bottom 1.5rem

  p
    color #767676
    line-height 30px
    margin-bottom 2rem

  div
    a
      color #767676
      transition 0.15s ease-in-out

      &:hover
        color white
</style>
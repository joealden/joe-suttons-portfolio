<template>
  <div id="wrapper">
    <div id="grid">
      <header>
        <nuxt-link to="/" exact>
          Joe Sutton
        </nuxt-link>
        <h1>Digital and Brand Designer</h1>
      </header>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/about" class="animated-link">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/showcase" class="animated-link">
              Showcase
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="animated-link">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="floater">
        <div class="inner slide">
          <div v-for="time in times" :key="time" class="wrap">
            <span>
              <img src="http://via.placeholder.com/700x500">
            </span>
            <span>
              <img src="http://via.placeholder.com/700x500">
            </span>
            <span>
              <img src="http://via.placeholder.com/700x500">
            </span>
            <span>
              <img src="http://via.placeholder.com/700x500">
            </span>
          </div>
        </div>
      </div>
      <main>
        <h2>Case Studies</h2>
        <div>
          <span>
            Umoro - Stab Mag - Tuff - Lettering
          </span>
        </div>
      </main>
      <div id="about">
        <h2>About</h2>
        <p>
          Aenean imperdiet accumsan lorem, vitae laoreet nisi pulvinar vitae. Vivamus facilisis condimentum magna, in malesuada urna
        </p>
      </div>
      <div id="dev">
        <a href="https://joealden.com">Developed by Joe Alden</a>
      </div>
    </div>
    <script src="floater.js"></script>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: [1, 2, 3]
    }
  }
}
</script>


<style lang="stylus" scoped>
@require '../assets/variables'

.floater
  overflow hidden
  grid-area showcase
  margin-left $main-margin
  padding-top $main-margin

.floater .inner.slide
  transform translate(0)
  animation slide 25s linear infinite
  transform-style preserve-3d
  z-index 100

.floater .inner .wrap
  align-items center

.floater .inner .wrap span
  display block
  min-width 70px
  opacity 0

.floater .inner.slide .wrap span
  opacity 1

  img
    width 100%
    &:not(last-child)
      margin-bottom 5rem

h2
  font-weight normal
  text-transform uppercase
  letter-spacing: 1px;
  font-size: 12px;
  color $main-grey

#grid
  display grid
  grid-template-columns 1fr 1fr 1fr
  grid-template-rows auto
  grid-template-areas "showcase header nav" "showcase main main" "showcase about dev"
  grid-column-gap 5rem
  height 100vh
  overflow hidden

header
  grid-area header
  margin-top $main-margin
  a
    text-decoration none
    text-transform uppercase
    letter-spacing: 1px;
    font-size: 12px;
    color $main-grey
    transition 0.25s ease-out
    &:hover
      color black
  h1
    margin 1rem 0
    color black
    font-size: 40px
    font-weight normal

nav
  grid-area nav
  margin-top $main-margin
  margin-right $main-margin
  
  ul
    margin 0
    li
      text-align right
      list-style none
      a
        padding: 0 0 0.5rem 0;

#showcase
  grid-area showcase
  margin-left $main-margin
  padding-top $main-margin
  overflow-y auto

  display flex
  flex-direction column
  img
    width 100%
    &:not(:last-child)
      margin-bottom 5rem

main
#about
#dev
  align-self end

main
  grid-area main
  margin-right $main-margin
  h2
    text-align right
  div
    overflow-x auto
    span
      font-size 20vh
      font-weight 900
      color black
      white-space nowrap
      margin-left -1vh

#about
  grid-area about
  margin-bottom $main-margin
  width 25rem
  color #3C3C3C
  font-size 14px
  line-height 30px
  p
    margin 0

#dev
  grid-area dev
  margin-bottom $main-margin
  margin-right $main-margin
  text-align right
  a
    color #868686
    text-decoration none
    transition 0.25s ease-out
    &:hover
      color black

.animated-link
  color #868686
  text-decoration none
  transition color 0.25s ease-out
  display inline-block
  font-size: 14px;
  
  &:hover
    color black
  &::after
    content ''
    display block
    width 0
    height 2px
    background-color #CECECE
    margin-top 0.1rem
    transition 0.25s ease-out
  &:hover::after
    width 100%
</style>

<template>
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
    <div id="showcase">
      <img src="http://via.placeholder.com/700x500">
      <img src="http://via.placeholder.com/700x1100">
    </div>
    <main>
      <h2>Case Studies</h2>
      <span>
        Umoro - Stab Mag - Tuff - Lettering
      </span>
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
</template>

<style lang="stylus" scoped>
@require '../assets/variables'

#grid
  display grid
  grid-template-columns 1fr 1fr 1fr
  grid-template-rows auto
  grid-template-areas "showcase header nav" "showcase main main" "showcase about dev"
  grid-column-gap 5rem
  padding 5rem

header
  grid-area header
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

  ul
    margin 0
    li
      text-align right
      list-style none
      a
        padding: 0 0 0.5rem 0;
      
#showcase
  grid-area showcase
  display flex
  flex-direction column
  img
    &:not(last-child)
      margin-bottom 5rem

main
  grid-area main
  h2
    font-weight normal
    text-transform uppercase
    letter-spacing: 1px;
    font-size: 12px;
    color $main-grey
  span
    font-size 275px
    font-weight 900
    line-height 344px
    color black
    white-space: nowrap;

#about
  grid-area about
  h2
    font-weight normal
    text-transform uppercase
    letter-spacing: 1px;
    font-size: 12px;
    color $main-grey

#dev
  grid-area dev
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

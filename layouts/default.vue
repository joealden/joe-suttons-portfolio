<template>
  <div id="main-wrapper">
    <div id="grid">
      <header>
        <nuxt-link to="/" exact class="animated-link">
          Joe Sutton
        </nuxt-link>
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
            <nuxt-link to="/case-studies" class="animated-link">
              Work
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="animated-link">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div id="main">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto')

body
  margin 0
  font-family 'Roboto', sans-serif

#main-wrapper
  background-color white
  height 100vh

#grid
  display grid
  grid-template-columns 1fr 1fr 1fr
  grid-template-rows auto
  grid-template-areas "header header nav" "main main main"
  grid-column-gap 4rem
  padding 4rem

header a
  text-transform uppercase

nav
  grid-area nav

  ul
    margin 0
    li
      text-align right
      list-style none
      a
        padding: 0 0 0.5rem 0;

#main
  grid-area main

.animated-link
  color grey
  text-decoration none
  transition color 0.25s ease-out
  display inline-block
  
  &:hover
    color black
  &::after
    content ''
    display block
    width 0
    height 2px
    background-color black
    margin-top 0.1rem
    transition width 0.25s ease-out
  &:hover::after
    width 100%

.nuxt-link-active
  color black
  &::after
    content ''
    display block
    width 100%
    height 2px
    background-color black
    margin-top 0.1rem
    transition width 0.25s ease-out
</style>

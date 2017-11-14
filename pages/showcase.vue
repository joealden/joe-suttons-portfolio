<template>
  <div id="showcase-wrapper">
    <header>
      <nuxt-link to="/" exact>
        Joe Sutton
      </nuxt-link>
      <button id="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </header>
    <h1>Showcase</h1>
    <div id="grid">
      <span><img src="https://via.placeholder.com/700x400"></span>
      <span><img src="https://via.placeholder.com/700x600"></span>
      <span><img src="https://via.placeholder.com/700x800"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
      <span><img src="https://via.placeholder.com/700x600"></span>
      <span><img src="https://via.placeholder.com/700x500"></span>
      <span><img src="https://via.placeholder.com/700x500"></span>
      <span><img src="https://via.placeholder.com/700x600"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
      <span><img src="https://via.placeholder.com/700x700"></span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@require '../assets/variables'

#showcase-wrapper
  padding 5rem 5rem 0 5rem

header
  display flex
  justify-content space-between
  
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
  font-weight 900
  font-size 12vw
  margin 5rem 0 2rem 0

button
  border none
  background-color white
  outline none
  cursor pointer

#hamburger 
  padding 0
  .line
    width 40px
    height 2px
    background-color black
    display block
    margin 0 0 8px auto
    transition all 0.3s ease-in-out

#grid
  column-gap 5em
  column-count 3
  span
    width 100%
    img
      width 100%
      padding-bottom 5rem
</style>

<template>
  <div id="wrapper">
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
      <div class="column">
        <img src="https://via.placeholder.com/700x400">
        <img src="https://via.placeholder.com/700x600">
        <img src="https://via.placeholder.com/700x800">
      </div>
      <div class="column">
        <img src="https://via.placeholder.com/700x700">
        <img src="https://via.placeholder.com/700x600">
        <img src="https://via.placeholder.com/700x500">
      </div>
      <div class="column">
        <img src="https://via.placeholder.com/700x500">
        <img src="https://via.placeholder.com/700x600">
        <img src="https://via.placeholder.com/700x700">
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@require '../assets/variables'

#wrapper
  padding 5rem

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

#grid
  display grid
  grid-template-columns 1fr 1fr 1fr
  grid-gap 5rem

  img
    width 100%
    &:not(:last-child)
      margin 0 0 5rem 0

button
  border none
  background-color white
  outline none
  cursor pointer

#hamburger .line
  width 40px
  height 2px
  background-color black
  display block
  margin 0 0 8px auto
  transition all 0.3s ease-in-out
</style>

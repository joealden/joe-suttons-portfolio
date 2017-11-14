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
      <img src="https://via.placeholder.com/700x400">
      <img src="https://via.placeholder.com/700x600">
      <img src="https://via.placeholder.com/700x800">
      <img src="https://via.placeholder.com/700x700">
      <img src="https://via.placeholder.com/700x600">
      <img src="https://via.placeholder.com/700x500">
      <img src="https://via.placeholder.com/700x500">
      <img src="https://via.placeholder.com/700x600">
      <img src="https://via.placeholder.com/700x700">
      <img src="https://via.placeholder.com/700x700">
      <img src="https://via.placeholder.com/700x700">
      <img src="https://via.placeholder.com/700x700">
      <img src="https://via.placeholder.com/700x700">
      <img src="https://via.placeholder.com/700x700">
      <img src="https://via.placeholder.com/700x700">
      <img src="https://via.placeholder.com/700x700">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@require '../assets/variables'

h1
  font-weight 900

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

#grid img
  display inline-block
  width 100%

// mobile
$padding-mobile = 6vw

#showcase-wrapper
  // Bottom margin is made by image grid
  padding $padding-mobile $padding-mobile 0 $padding-mobile

h1
  font-size 16vw
  margin $padding-mobile 0 1rem 0

#grid
  column-gap $padding-mobile
  column-count 1
  img
    padding-bottom $padding-mobile

// tablet
@media only screen and (min-width: 768px)
  #grid
    column-count 2

// desktop
$padding-desktop = 4vw

@media only screen and (min-width: 1500px)
  #showcase-wrapper
    // Bottom margin is made by image grid
    padding $padding-desktop $padding-desktop 0 $padding-desktop

  h1
    font-size 12vw
    margin $padding-desktop 0 1rem 0

  #grid
    column-gap $padding-desktop
    column-count 3
    img
      padding-bottom $padding-desktop
</style>

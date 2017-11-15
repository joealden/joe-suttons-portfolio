<template>
  <div id="showcase-wrapper">
    <header>
      <nuxt-link to="/" exact>
        Joe Sutton
      </nuxt-link>
      <div @click="openMenu" :class="hamburgerClicked ? 'open' : ''" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
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

<script>
export default {
  data() {
    return {
      hamburgerClicked: false
    }
  },

  methods: {
    openMenu() {
      this.hamburgerClicked = !this.hamburgerClicked
    }
  }
}
</script>


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

// TODO: hardware accelerate
#hamburger
  width 40px
  height 27px
  position relative
  transform rotate(0deg)
  transition .5s ease-in-out
  cursor pointer
  span
    display block
    position absolute
    height 2px
    width 100%
    background-color black
    opacity 1
    left 0
    transform rotate(0deg)
    transition .25s ease-in-out
    transform-origin left center
    &:nth-child(1)
      top 0px
    &:nth-child(2)
      top 12px
    &:nth-child(3)
      top 24px

#hamburger.open span
  &:nth-child(1)
    transform rotate(45deg)
    top 0px
    left 10px
  &:nth-child(2)
    width 0%
    opacity 0
  &:nth-child(3)
    transform rotate(-45deg)
    top 29px
    left 10px

#grid img
  display inline-block
  width 100%

// mobile
$padding-mobile = 6vw

#showcase-wrapper
  // Bottom margin is made by image grid
  padding $padding-mobile $padding-mobile 0 $padding-mobile

h1
  font-size 15vw
  margin $padding-mobile 0 $padding-mobile 0

#grid
  column-gap $padding-mobile
  column-count 1
  img
    padding-bottom $padding-mobile

// tablet
@media only screen and (min-width: 768px)
  h1
    font-size 11vw

  #grid
    column-count 2

// desktop
$padding-desktop = 3vw

@media only screen and (min-width: 1500px)
  #showcase-wrapper
    // Bottom margin is made by image grid
    padding $padding-desktop $padding-desktop 0 $padding-desktop

  h1
    margin $padding-desktop 0 1rem 0

  #grid
    column-gap $padding-desktop
    column-count 3
    img
      padding-bottom $padding-desktop
</style>

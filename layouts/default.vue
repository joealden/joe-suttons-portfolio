<template>
  <div id="main-wrapper">
    <nuxt/>
  </div>
</template>

<style lang="stylus">
*
  font-family "aktiv-grotesk"

body
  margin 0

.page-enter-active
.page-leave-active
  transition all 0.25s ease

.page-enter
.page-leave-active 
  opacity 0
  transform-origin 50% 50%

#main-wrapper
  background-color white
  height 100vh
</style>

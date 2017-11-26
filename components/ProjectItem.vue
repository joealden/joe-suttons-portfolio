<template>
  <div class="image-wrapper">
    <div class="details">
      <h4>{{ title }}</h4>
      <span>{{ info }}</span>
    </div>
    <img :src="src" :alt="alt">
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.image-wrapper
  position relative

img
  width 100%

// TODO: position text properly
.details
  position absolute
  bottom 50px
  left 50px

  h4
    font-size 30px
    margin-bottom 0.5rem

  span
    font-size 22px
</style>

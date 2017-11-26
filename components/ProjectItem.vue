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
  display inline-block

img
  width 100%

.details
  position absolute
  height 100%
  width 100%

  h4
    font-size 30px

  span
    font-size 22px
</style>

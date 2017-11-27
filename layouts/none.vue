<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
}
</script>

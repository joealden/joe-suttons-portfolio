<template>
  <div id="black-border">
    <div class="center-wrapper">
      <header>
        <nav>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>
        <nuxt-link to="/">
          <img src="/images/logo-black.svg" alt="Logo">
        </nuxt-link>
      </header>
    </div>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
}
</script>

<style lang="stylus" scoped>
#black-border
  border-top 5px solid black

header
  display flex
  justify-content space-between
  margin 1.5rem 4rem

  nav
    a
      vertical-align middle
      color #525252
      transition 0.15s ease-in-out

      &:not(last-child)
        margin-right 2.5rem

      &:hover
        color black

  a
    img
      height 1.5rem
      vertical-align middle

.nuxt-link-active
  color black
</style>

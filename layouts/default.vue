<template>
  <div id="center-content">
    <div id="wrapper">
      <header>
        <nav>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>
        <img src="TODO" alt="Logo">
      </header>
      <main>
        <nuxt/>
      </main>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#center-content
  border-top 5px solid black

#wrapper
  max-width 1600px
  margin 0 auto

header
  display flex
  justify-content space-between
  margin 1.25rem 4rem

  nav
    a
      color #525252
      transition 0.15s ease-in-out

      &:not(last-child)
        margin-right 2.5rem

      &:hover
        color black

/* TODO: Create nav circle underline (Stripe nav flow) */
</style>

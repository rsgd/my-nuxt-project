<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="p-2">my-nuxt-project</h1>
      <div class="links"></div>

      <div
        class="m-6 grid grid-cols-1 2col:grid-cols-2 3col:grid-cols-3 gap-4"
      ></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

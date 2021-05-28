<template>
  <div>
    <div class="logo text-blue-600">Nuxt / Shopify / imgIX</div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<style>
.logo {
  animation: 1s appear;
  margin: auto;
  font-size: 2rem;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

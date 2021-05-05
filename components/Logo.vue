<template>
  <div>
    <div class="NuxtLogo text-blue-600">Hello World</div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<style>
.NuxtLogo {
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

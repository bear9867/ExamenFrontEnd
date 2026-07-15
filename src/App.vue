<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Calculo de calificaciones</RouterLink>
        <RouterLink to="/formulario-registro">Formulario de registro</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  padding: 0.5rem 0;
  margin-top: 0.5rem; 
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: block;
    width: 100%;
    max-height: none;
  }

  header .wrapper {
    display: block;
    width: 100%;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: 100%;
    margin: 0;
    padding: 1rem;
    text-align: center;
  }
}
</style>

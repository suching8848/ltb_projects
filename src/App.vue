<script>
export default {
  name: 'App'
}
</script>

<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/new">New Page</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #000000;
}

.nav {
  margin: 20px;
}

.nav a {
  color: #42b983;
  margin-right: 20px;
  text-decoration: none;
  font-size: 18px;
}

.nav a:hover {
  text-decoration: underline;
}
</style>

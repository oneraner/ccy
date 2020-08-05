<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../src/assets/css/all.scss';
@import url('https://fonts.googleapis.com/css2?family=Coiny&family=Noto+Sans+TC:wght@100;400;900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

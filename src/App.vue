<template>
  <div id="app">
    <left-nav></left-nav>
    <container></container>
  </div>
</template>

<script>
import Container from './components/Container';
import LeftNav from './components/LeftNav';

export default {
  name: 'app',
  components: {
    Container,
    LeftNav,
  },
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="container">
    <img class="logo" src="../assets/logo.png">
    <h1>StyleCraft</h1>
    <p>
      StyleCraft is a style guide <a href="https://vuejs.org" target="_blank">Vue.js</a> template
    </p>
    <h2></h2>
    <ul>
      <li><a href="https://github.com/berto/stylecraft" target="_blank">Code and Usage</a></li>
    </ul>
    <styles></styles>
  </div>
</template>

<script>
import Styles from './Styles';

export default {
  name: 'container',
  components: {
    Styles,
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.logo {
  width: 100px;
}

.container {
  width: 550px;
  margin: 40px 0 50px 260px;
}
</style>

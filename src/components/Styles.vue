<template>
  <div>
    <div class="component" v-for="(component, i) in components">
      <h1 class="title"> {{component.title}} </h1>
      <span v-html="component.html"></span>
      <code-demo :html="component.html" :sass="component.sass"></code-demo>
    </div>
  </div>
</template>

<script>
import CodeDemo from './CodeDemo';
import components from '../components.json';

export default {
  name: 'styles',
  components: {
    CodeDemo,
  },
  data: () => ({ components }),
};
</script>

<style lang="scss">
@import '../sass/style.scss';

.title {
  text-align: left; 
  border-bottom: 1px solid #ddd;
}

.component {
  text-align: left;
}
</style>

<template>
  <div>
    <div class="component" v-for="component in components">
      <h1 class="title"> {{component.title}} </h1>
      <span v-html="component.html"></span>
      <code-demo :html="component.html" :sass="component.sass"></code-demo>
    </div>
  </div>
</template>

<script>
import CodeDemo from './CodeDemo';

const data = {
  components: [
    {
      title: 'Buttons',
      html: '<button class="sc-button">SOMETHING</button>',
      sass: '.button { background: red }',
    },
    {
      title: 'Banner',
      html: '<div class="banner"></div>',
      sass: '.banner { width: 300px; height: 300px; background: purple }',
    },
  ],
};

export default {
  name: 'styles',
  components: {
    CodeDemo,
  },
  data: () => data,
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

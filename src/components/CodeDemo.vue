<template >
  <section>
    <ul>
      <li v-bind:class="{ active: displayHTML }" v-on:click="toggleCode"> HTML </li>
      <li v-bind:class="{ active: !displayHTML }" v-on:click="toggleCode"> SASS </li>
    </ul>
    <pre v-if="displayHTML" v-highlightjs="html"><code class="html"></code></pre>
    <pre v-if="!displayHTML" v-highlightjs="sass"><code class="sass"></code></pre>
  </section>
</template>

<script>
export default {
  name: 'code-demo',
  props: ['html', 'sass'],
  data: () => ({
    displayHTML: true,
  }),
  methods: {
    toggleCode() {
      this.displayHTML = !this.displayHTML;
    },
  },
};
</script>

<style lang="scss" scoped>
  code {
    width: 100%;
    height: 200px;
    border-radius: 2px;
  }
  .active {
    border-bottom: 3px solid #42b983;
  }
  ul {
    margin-bottom: 0;
    padding: 0;
    display: flex;
    list-style: none;
    li {
      padding-left: 10px;
      padding-right: 10px;
      border-bottom: 5px solid white;
      &:hover {
        display: inline-block;
        cursor: pointer;
      }
    }
  }
</style>

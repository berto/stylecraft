<template>
  <div class="left-nav"></div>
</template>

<script>
export default {
  name: 'left-nav',
};
</script>

<style scoped>
.left-nav {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 15px 0 30px 30px;
  border-right: 1px solid #bbb;
  box-shadow: 0 0 20px #ccc;
  -webkit-box-shadow: 0 0 20px #ccc;
}
</style>

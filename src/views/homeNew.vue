<template>
  <div class="home-container">
    <h1>VUE3教学</h1>
    <hr>
    <Mobanyufa></Mobanyufa>
  </div>
</template>

<script>
import Mobanyufa from '../components/mobanyufa.vue';

export default {
  name: 'homeNew',
  components: {
    Mobanyufa
  }
};
</script>

<style scoped>
.home-container{
  position: relative;
  z-index: 10;
}

h1 {
  z-index: 11;
  color: aqua;
}
</style>
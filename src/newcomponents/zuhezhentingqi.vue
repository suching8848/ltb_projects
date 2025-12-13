<template>
  <div class="zuhezhentingqi">
    <div class="watch-content">
      <h3>组合式API--监听</h3>
      <p>{{ count }}</p>
      <button @click="addCount">增加</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { watchCount } from '../utils/watchUtils';

const count = ref(0);

const addCount = (e) => {
  console.log(e, '88888888888');
  count.value++;
};

// watch(count, (newValue, oldValue) => {
//   console.log('new:', newValue, 'old:', oldValue);
// });

watchCount(count);
</script>

<style scoped>
.zuhezhentingqi {
  color: green;
}
</style>
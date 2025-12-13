<template>
  <div class="zuheshengmingzhouqi">
    <h3>组合式---生命周期</h3>
    <p>{{ count }}</p>
    <button @click="addCount">zengjia</button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const count = ref(0);

const addCount = (e) => {
  console.log(e, '-------------------------');
  count.value++;
}

watch(count, async (newVal, oldVal) => {
  console.log('newVal', newVal, "oldVal", oldVal, '-------------------------');
});

onMounted(() => {
  console.log('组件渲染之后');
});
</script>

<style scoped>
.zuheshengmingzhouqi {
  color: violet;
}
</style>
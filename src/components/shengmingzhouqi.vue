<template>
  <div class="shengmingzhouqi">
    <h3>组件生命周期演示</h3>
    <p>当前计数: {{ count }}</p>
    <button @click="addCount">增加</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const count = ref(0);

onBeforeMount(() => {
  console.log('组件即将挂载');
});

onMounted(() => {
  console.log('组件已挂载');
});

onBeforeUpdate(() => {
  console.log('组件即将更新');
});

onUpdated(() => {
  console.log('组件已更新');
});

onBeforeUnmount(() => {
  console.log('组件即将卸载');
});

onUnmounted(() => {
  console.log('组件已卸载');
});

const addCount = () => {
  count.value++;
};
</script>

<style scoped>
.shengmingzhouqi {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  color: #fff;
  margin: 20px 0;
}

button {
  background-color: #00bfff;
  color: #000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
}

button:hover {
  background-color: #0080ff;
}
</style>
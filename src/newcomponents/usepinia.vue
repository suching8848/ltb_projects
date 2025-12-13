<template>
  <div class="use-pinia">
    <h3>pinia简单使用</h3>
    <p>计数: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">增加</button>
    <p>双倍数: {{ counterStore.doubleCount }}</p>
    <ul>
      <li v-for="(value, index) in counterStore.list.slice(0,5)" :key="index">{{value.name}}</li>
    </ul>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import { onMounted } from 'vue'

const counterStore = useCounterStore()

onMounted(() => {
  counterStore.getList()
})
</script>

<style scoped>
.use-pinia {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
}

.use-pinia h3 {
  color: #333;
  margin-bottom: 15px;
}

.use-pinia p {
  margin: 10px 0;
  font-size: 16px;
}

.use-pinia button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.use-pinia button:hover {
  background-color: #3aa876;
}

.use-pinia ul {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}

.use-pinia li {
  background-color: #fff;
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>
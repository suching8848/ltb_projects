<template>
  <div class="zuhexianyingshi-container">
    <h2>组合响应式演示</h2>
    <div class="demo-section">
      <p>当前计数: {{ count }}</p>
      <button @click="increment">增加</button>
      <button @click="decrement">减少</button>
    </div>
    <div class="demo-section">
      <p>计算结果: {{ doubledCount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Zuhexianyingshi',
  data() {
    return {
      count: 0
    };
  },
  computed: {
    doubledCount() {
      return this.count * 2;
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    }
  }
};
</script>

<style scoped>
.zuhexianyingshi-container {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  color: #fff;
  text-align: center;
}

h2 {
  color: #00bfff;
  margin-bottom: 20px;
}

.demo-section {
  margin: 20px 0;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

button {
  background-color: #00bfff;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0080ff;
}
</style>
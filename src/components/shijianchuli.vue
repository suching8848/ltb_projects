<template>
  <div class="shijianchuli">
    <h3>事件处理</h3>
    <hr>
    <h4>内联事件处理器</h4>
    <button @click="count++">ADD 1</button>
    <p>count is: {{count}}</p>
    <hr>
    <!-- 必须使用方法处理器 -->
    <h4>方法事件处理器</h4>
    <button @click="addCount()">ADD 2</button>
    <p>countNum is: {{countNum}}</p>
  </div>
</template>

<script>
export default {
  name: 'shijianchuli',
  data() {
    return {
      count: 0,
      countNum: 0
    }
  },
  methods: {
    addCount() {
      this.countNum += 2;
    }
  }
}
</script>

<style scoped>
.shijianchuli {
  color: yellow;
}
</style>
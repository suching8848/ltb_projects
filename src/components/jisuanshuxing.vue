<template>
  <div class="jisuanshuxing">
    <hr>
    <h3>计算属性</h3>
    <p>{{ content.name }}</p>
    <div>{{ content.text1.length > 2 ? 'yes' : 'no' }}</div>
    <div>{{ isResults }}</div>
    <div>{{ (content.results.length > 0 ? (content.text1.length > 0 ? 'yes' : '55555') : '22222') }}</div>
    <p>{{ isResults }}</p>
    <p>{{ isData() }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'jisuanshuxing',
  data() {
    return {
      content: {
        name: 'abccccccccccccd',
        text: [],
        text1: ['1', '2', '3'],
        arr: [{ name: '张三', id: 1 }, { name: '王五', id: 2 }, { name: '赵六', id: 3 }],
        results: []
      }
    }
  },
  computed: {
    isResults() {
      return this.content.results.length > 0 ? (this.content.text1.length > 0 ? 'yes' : '88888888') : '22222';
    }
  },
  methods: {
    isData() {
      return this.content.results.length > 0 ? (this.content.text1.length > 0 ? 'yes' : '77777777') : '22222';
    }
  }
}
</script>

<style scoped>
.jisuanshuxing {
  color: red;
}
</style>
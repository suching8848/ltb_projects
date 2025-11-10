<template>
  <div class="child">
    <h3>子组件</h3>
    <button @click="clicking">click me</button>
  </div>
</template>

<script>
export default {
  name: 'zichuanfu',
  data() {
    return {
      msg: '这是子组件'
    }
  },
  methods: {
    clicking() {
      this.$emit('someEvent', this.msg);
    }
  }
}
</script>
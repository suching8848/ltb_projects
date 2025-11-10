<template>
  <div class="zujianshiModelSearch">
    搜索内容：<input type="text" v-model="searchText">
  </div>
</template>

<script>
export default {
  name: 'zujianshiModelSearch',
  data() {
    return {
      searchText: ''
    }
  },
  watch: {
    searchText(newValue, oldValue) {
      console.log(newValue, '++++++++++++++');
      console.log(oldValue, '----------------');
      console.log(newValue);
      this.$emit('search', newValue);
    }
  }
}
</script>
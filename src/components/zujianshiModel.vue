<template>
  <div class="zujianshiModel">
    <h3>组件自定义事件</h3>
    <p>搜索内容：{{ search }}</p>
    <zujianshiModelSearch @search="getSearch"></zujianshiModelSearch>
  </div>
</template>

<script>
import zujianshiModelSearch from '../pages/zujianshiModelSearch.vue';
export default {
  name: 'zujianshiModel',
  data() {
    return {
      search: ''
    }
  },
  components: {
    zujianshiModelSearch
  },
  methods: {
    getSearch(data) {
      this.search = data;
      console.log(data, '++++++++++++++');
    }
  }
}
</script>

<style scoped>
.zujianshiModel {
  color: green;
}
</style>
<template>
  <div class="zujianshijian">
    <h3>组件自定义事件</h3>
    <zichuanfu @someEvent="getmsg"></zichuanfu>
    <p>从子元素接到的数据：{{ message }}</p>
  </div>
</template>

<script>
import zichuanfu from '../pages/zichuanfu.vue';
export default {
  name: 'zujianshijian',
  data() {
    return {
      message: ''
    }
  },
  components: {
    zichuanfu
  },
  methods: {
    getmsg(data) {
      this.message = data;
      console.log(data);
    }
  }
}
</script>

<style scoped>
.zujianshijian {
  color: white;
}
</style>
<template>
  <div class="zujianshiantao">
    <h3>组件嵌套</h3>
    <Header></Header>
    <Main></Main>
    <Aside></Aside>
  </div>
</template>

<script>
import Header from '../pages/header.vue';
import Main from '../pages/main.vue';
import Aside from '../pages/aside.vue';

export default {
  name: 'zujianshiantao',
  data() {
    return {
      name: '张三'
    }
  },
  components: {
    Header,
    Main,
    Aside,
  }
}
</script>

<style scoped>
.zujianshiantao {
  color: red;
  position: relative;
}
</style>
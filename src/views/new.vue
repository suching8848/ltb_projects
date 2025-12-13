<template>
  <div class="new-container">
    <h1>新组件集合1.1.3</h1>
    <nav class="navigation">
      <router-link to="/" class="nav-link">返回首页</router-link>
    </nav>
    <div v-if="showContent">
      <Zuhexianyingshi />
      <hr>
      <Zuhejianshuxing />
      <hr>
      <Zuheshijianchuli />
      <hr>
      <Zuhezhentingqi />
      <hr>
      <Zuhemobanyingyong />
      <hr>
      <Zuheshengmingzhouqi />
      <hr>
      <ZuheProps />
      <hr>
      <Usepinia />
      <hr>
      <Swiper />
    </div>
  </div>
</template>

<script>
import Zuhexianyingshi from '../newcomponents/zuhexianyingshi.vue';
import Zuhejianshuxing from '../newcomponents/zuhejianshuxing.vue';
import Zuheshijianchuli from '../newcomponents/zuheshijianchuli.vue';
import Zuhezhentingqi from '../newcomponents/zuhezhentingqi.vue';
import Zuhemobanyingyong from '../newcomponents/zuhemobanyingyong.vue';
import Zuheshengmingzhouqi from '../newcomponents/zuheshengmingzhouqi.vue';
import ZuheProps from '../newcomponents/zuheProps.vue';
import Usepinia from '../newcomponents/usepinia.vue';
import Swiper from '../newnewcomponents/swiper.vue';

export default {
  name: 'new',
  
  components: {
    Zuhexianyingshi,
    Zuhejianshuxing,
    Zuheshijianchuli,
    Zuhezhentingqi,
    Zuhemobanyingyong,
    Zuheshengmingzhouqi,
    ZuheProps,
    Usepinia,
    Swiper
  },
  
  data() {
    return {
      showContent: false,
    }
  },
  
  mounted() {
    setTimeout(() => {
      this.showContent = true;
    }, 0);
  }
}
</script>

<style scoped>
.new-container {
  position: relative;
  z-index: 10;
}

h1 {
  z-index: 11;
  color: aqua;
}

.navigation {
  margin: 20px 0;
  z-index: 11;
}

.nav-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
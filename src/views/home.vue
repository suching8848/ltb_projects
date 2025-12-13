<template>
  <div class="home-container">
    <h1>VUE教学</h1>
    <nav class="navigation">
      <router-link to="/new" class="nav-link">新组建集合</router-link>
    </nav>
    <hr>
    <Mobanyufa></Mobanyufa>
    <Shuxingbangding></Shuxingbangding>
    <Liebiaoxuanran></Liebiaoxuanran>
    <Keyiguanlizhuangtai></Keyiguanlizhuangtai>
    <Shijianchuli></Shijianchuli>
    <Shijianchuancan></Shijianchuancan>
    <Shijianxianshi></Shijianxianshi>
    <Shijianxiushifu></Shijianxiushifu>
    <JisuanShuxing></JisuanShuxing>
    <Classbanding></Classbanding>
    <Stylebanding></Stylebanding>
    <Watchzhenting></Watchzhenting>
    <BiaduanShujubanding></BiaduanShujubanding>
    <Mobanyinyong></Mobanyinyong>
    <Zujianshiantao></Zujianshiantao>
    <Zujianshijian></Zujianshijian>
    <ZujianshijianModel></ZujianshijianModel>
    <Zujianshiantao></Zujianshiantao>
    <Zujianshijian></Zujianshijian>
    <ZujianshijianModel></ZujianshijianModel>
    <Chachaoslots></Chachaoslots>
  </div>
</template>

<script>
import Mobanyufa from '../components/mobanyufa.vue';
import Shuxingbangding from '../components/shuxingbangding.vue';
import Liebiaoxuanran from '../components/liebiaoxuanran.vue';
import Keyiguanlizhuangtai from '../components/keyiguanlizhuangtai.vue';
import Shijianchuli from '../components/shijianchuli.vue';
import Shijianchuancan from '../components/shijianchuancan.vue';
import Shijianxianshi from '../components/shijianxianshi.vue';
import Shijianxiushifu from '../components/shijianxiushifu.vue';
import JisuanShuxing from '../components/jisuanshuxing.vue';
import Classbanding from '../components/classbanding.vue';
import Stylebanding from '../components/stylebanding.vue';
import Watchzhenting from '../components/watchzhenting.vue';
import BiaduanShujubanding from '../components/biaduanshujubanding.vue';
import Mobanyinyong from '../components/mobanyinyong.vue';
import Zujianshiantao from '../components/zujianshiantao.vue';
import Zujianshijian from '../components/zujianshijian.vue';
import ZujianshijianModel from '../components/zujianshiModel.vue';
import Chachaoslots from '../components/chachaoslots.vue';

export default {
  name: 'home',
  components: {
    Mobanyufa,
    Shuxingbangding,
    Liebiaoxuanran,
    Keyiguanlizhuangtai,
    Shijianchuli,
    Shijianchuancan,
    Shijianxianshi,
    Shijianxiushifu,
    JisuanShuxing,
    Classbanding,
    Stylebanding,
    Watchzhenting,
    BiaduanShujubanding,
    Mobanyinyong,
    Zujianshiantao,
    Zujianshijian,
    ZujianshijianModel,
    Chachaoslots
  }
};
</script>

<style scoped>
.home-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  z-index: 11;
  color: aqua;
  margin-bottom: 30px;
}

hr {
  margin: 30px 0;
  border: 1px solid #ddd;
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
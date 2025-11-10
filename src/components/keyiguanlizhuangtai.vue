<template>
  <div class="keyiguanlizhuangtai">
    <h3>居住证明-V-for中key</h3>
    <!-- 推荐用户在任何可行的时候为v-for的项，要为其加一个key 属性，key绑定的期望值是一个基础的类型的值，例如字符串或者number -->
    <!-- 最好不要使用index作为key值，如果要确保每一条数据的唯一索引不会发生变化 -->
    <!-- 因为这会基于数据的顺序来决定元素，如果数组的顺序发生变化，这些元素值就变成了无效的，会导致渲染出错 -->
    <div v-for="(name, index) in names" :key="index">{{name}}----------{{index}}</div>
    <div v-for="value in results" :key="value.qky">
      <p>{{value.name}}</p>
      <img :src="value.img" :alt="value.title">
    </div>
  </div>
</template>

<script>
export default {
  name: 'keyiguanlizhuangtai',
  data() {
    return {
      names: ["张三零", "小王", "小李"],
      results: [
        {
          "qky": "10284966",
          "adqnsint": "0",
          "gdi": "-",
          "edv": "-3",
          "title": "双人游戏大全",
          "url": "http://360.cn/flash/10284966.html",
          "data": "{\"type\":\"flashgame\",\"appid\":\"10284966\"}",
          "name": "双人游戏大全",
          "img": "//p0.qhimg.com/d/apsstore/74fc1bd0a43f2945b4be949859efab06.png"
        },
        {
          "qky": "10214425",
          "adqnsint": "0",
          "gdi": "-",
          "edv": "-3",
          "title": "横版游戏大全",
          "url": "http://360.cn/flash/10214425.html",
          "data": "{\"type\":\"flashgame\",\"appid\":\"10214425\"}",
          "name": "横版游戏大全",
          "img": "//p0.qhimg.com/d/apsstore/8c1642f71a195def.f7.png"
        },
        {
          "qky": "102144642",
          "adqnsint": "0",
          "gdi": "-",
          "edv": "-3",
          "title": "火柴人游戏",
          "url": "http://360.cn/flash/102144642.html",
          "data": "{\"type\":\"flashgame\",\"appid\":\"102144642\"}",
          "name": "火柴人游戏",
          "img": "//p1.qhimg.com/d/apsstore/f01d475ecc92fe2feb687.png"
        }
      ],
      myObject: {
        title: '游戏列表',
        author: 'ADA',
        Date: '2021-09-01'
      }
    }
  }
}
</script>

<style scoped>
.keyiguanlizhuangtai {
  color: green;
}
</style>
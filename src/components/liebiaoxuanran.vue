<template>
  <div class="liebiaoxuanran">
    <h3>列表渲染</h3>
    <hr>
    <div v-for="name in names">{{name}}</div>
    <div v-for="(name, index) in names">{{name}}----------{{index}}</div>
    <div v-for="value in results">
      {{value.name}}
    </div>
    <div v-for="value in results">
      <img :src="value.img" :alt="value.title">
    </div>
    <div v-for="(value, key, index) in myObject">{{value}}---{{key}}---{{index}}</div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'liebiaoxuanran',
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
          "img": "//p1.qhimg.com/8c1642f71a195def.f7.png"
        },
        {
          "qky": "102144642",
          "adqnsint": "0",
          "gdi": "-",
          "title": "火柴人游戏",
          "url": "http://360.cn/flash/102144642.html",
          "data": "{\"type\":\"flashgame\",\"appid\":\"102144642\"}",
          "name": "火柴人游戏",
          "img": "//p1.qhimg.com/f01d475ecc92fe2feb687.png"
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
.liebiaoxuanran {
  color: burlywood;
}
</style>
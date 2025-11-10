<template>
  <div class="stylebanding">
    <hr>
    <h3>样式绑定</h3>
    <p :style="{ color: activeColor, fontSize: fontSizeNum + 'px' }">
      1. 内联样式绑定
    </p>
    <p :style="objectStyle">
      2. 内联样式绑定-对象语法
    </p>
  </div>
</template>

<script>
export default {
  name: 'stylebanding',
  data() {
    return {
      activeColor: 'red',
      fontSizeNum: 30,
      objectStyle: {
        color: 'blue',
        fontSize: '28px'
      }
    }
  }
}
</script>

<style scoped>
.stylebanding {
  color: green;
}
</style>
<template>
  <div class="zuhemobanyingyong">
    <h3>组合式---模板引用</h3>
    <p ref="message">这是组合式模板引用的内容</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const message = ref(null);

onMounted(() => {
  message.value.style.color = 'Aqua';
  message.value.style.fontSize = '30px';
  message.value.innerHTML = '++++66666656656565++++';
});
</script>

<style scoped>
.zuhemobanyingyong {
  color: red;
}
</style>
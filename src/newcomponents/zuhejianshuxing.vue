<template>
  <div class="zuhejianshuxing">
    <h3>组合式API--计算属性</h3>
    <p>{{ message }}</p>
    <p>{{ userInfo.name }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseUserInfoName }}</p>
    <p>{{ demo }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { myDemo } from '../utils/computedUtils';

const message = ref("adsadsad");

const userInfo = reactive({
  name: "张三",
  age: 18,
  sex: "男"
});

const reverseMessage = computed(() => {
  return message.value.split("").reverse().join("");
});

const reverseUserInfoName = computed(() => {
  return userInfo.name.split("").reverse().join("");
});

const demo = myDemo(message);
</script>

<style scoped>
.zuhejianshuxing {
  color: red;
}
</style>
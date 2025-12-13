<template>
  <div class="zuheProps">
    <h3>组合式api---props---父组件</h3>
    <zuheChild title="787878" age="18" :message3="message3" @onSomeEvent="getData"></zuheChild>
    <p>{{ message1 }}</p>
  </div>
</template>

<script setup>
import zuheChild from '../pages/zuheChild.vue';
import { ref } from 'vue';

const message1 = ref('')

const message3 = ref('dongtaizhi');

const getData = (data) => {
  message1.value = data;
};
</script>

<style scoped>
.zuheProps {
  color: yellow;
}
</style>
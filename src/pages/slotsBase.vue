<template>
  <div class="slots-base">
    <h3>基础插槽知识</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'slotsBase'
}
</script>

<style scoped>
.slots-base {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
}
</style>
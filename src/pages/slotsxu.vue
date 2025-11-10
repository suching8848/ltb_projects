<template>
  <div class="slots-xu">
    <h3>slot插槽进阶</h3>
    <slot name="header"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'slotsxu',
  data() {
    return {
      // message: 'slotxu'
    }
  }
}
</script>

<style scoped>
.slots-xu {
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-top: 20px;
}

.content-container {
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 3px;
}
</style>
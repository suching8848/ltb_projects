<template>
  <div class="chachaoslots">
    <hr>
    <h3>插槽1</h3>
    <slotsBase>
      <div>
        <h4>插槽标题</h4>
        <p>插槽内容</p>
      </div>
    </slotsBase>
    <hr>
    <h3>插槽2</h3>
    <slotsxu>
      <template #header>
        <h4>头部标题</h4>
        <a href="#">ddddddddddddddddd</a>
      </template>
      <template #content>
        <p>{{ msg }}</p>
      </template>
    </slotsxu>
  </div>
</template>

<script>
import slotsBase from '../pages/slotsBase.vue';
import slotsxu from '../pages/slotsxu.vue';
export default {
  name: 'chachaoslots',
  data() {
    return {
      msg: 'hello world'
    }
  },
  components: {
    slotsBase,
    slotsxu
  },
}
</script>

<style scoped>
.chachaoslots {
  color: red;
}
</style>
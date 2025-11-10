<template>
  <div class="biaodanshujubanding">
    <hr>
    <h2>表单绑定数据</h2>
    <form>
      <input type="text" v-model.lazy="lazya"><input>
      <p>{{ lazya }}</p>
      <p-message is="{{message}}"></p-message>
      <input model="message" placeholder="edit me" />
      <br>
      <input type="checkbox" id="checkbox" v-model="checked"><input>
      <label for="checkbox">{{ checked }}</label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'biaduanshujubanding',
  data() {
    return {
      lazya: 'sssssssssss',
      message: '',
      checked: true
    }
  }
}
</script>

<style scoped>
.biaodanshujubanding {
  color: white;
}
</style>
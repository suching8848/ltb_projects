<template>
  <div class="watchzhenting">
    <hr>
    <h3>watch监听</h3>
    <p>
      {{ message }}
    </p>
    <button @click="update">修改数据</button>
  </div>
</template>

<script>
export default {
  name: 'watchzhenting',
  data() {
    return {
      message: 'watchzhenting'
    }
  },
  methods: {
    update() {
      this.message = '1111111111111111update';
    }
  },
  watch: {
    message(newValue, oldValue) {
      console.log(newValue, '************');
      console.log(oldValue, '+----------------+');
    }
  }
}
</script>

<style scoped>
.watchzhenting {
  color: blueviolet;
}
</style>
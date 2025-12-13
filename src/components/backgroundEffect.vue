<template>
  <div class="background-effect">
    <!-- 背景效果内容 -->
  </div>
</template>

<script>
export default {
  name: 'BackgroundEffect'
}
</script>

<style scoped>
.background-effect {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #000000, #111111, #222222, #111111, #000000);
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
  z-index: -1;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
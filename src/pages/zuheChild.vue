<template class="zuheChild">
  <div>
    <h3>组合式api---子组件</h3>
    <p>{{ props.title }}</p>
    <p>{{ props.age }}</p>
    <p>{{ props.message3 }}</p>

    <button @click="sendData">发送数据</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// const props = defineProps(['title', 'age', 'message3']);
const message = ref("zuhechild+++++++++++++++");

const props = defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  age: {
    type: Number,
    default: 1800,
  },
  message3: {
    type: String,
    default: "默认消息",
  },
});

const emit = defineEmits(["onSomeEvent"]);

const sendData = () => {
  emit('onSomeEvent', message.value);
};
</script>

<style scoped>
.zuhechild {
  color: red;
}
</style>
import { computed } from 'vue';

export function myDemo(message) {
  const demo = computed(() => {
    return '+abcd+ ' + message.value;
  });
  return demo;
}
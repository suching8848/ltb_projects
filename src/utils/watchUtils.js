import { watch } from 'vue';

export function watchCount(count) {
  watch(count, (newValue, oldValue) => {
    console.log('new:', newValue, 'old:', oldValue);
  })
}
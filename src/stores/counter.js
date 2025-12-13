import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  const doubleCount = computed(() => {
    return count.value * 2
  })

  const list = ref([])
  const getList = async () => {
    const res = await axios.get('https://360buyapi.com/tos/miniapp/v1/category.html')
    list.value = res.data.data
  }

  return {
    count,
    increment,
    doubleCount,
    list,
    getList
  }
})
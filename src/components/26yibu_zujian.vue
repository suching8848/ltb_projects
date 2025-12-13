<template>
    <div class="yibu_zujian">
        <h3>异步组件</h3>
        <component :is="isComponentA ? 'ComponentA' : 'ComponentB'"/>
        <button @click="change2">切换组件2</button>
    </div>
</template>

<script>
import ComponentA from "../pages/componentA.vue";
// import ComponentB from "../pages/componentB.vue";
import { defineAsyncComponent } from 'vue';
const ComponentB = defineAsyncComponent(() => import('../pages/componentB.vue'));

export default {
    name: '26yibu_zujian',
    data() {
        return {
            tabComponent: 'Component',
            isComponentA: true,
        }
    },
    components: {
        ComponentA,
        ComponentB,
    },
    methods: {
        change2() {
            this.isComponentA = !this.isComponentA;
        }
    }
}
</script>

<style scoped>
.yibu_zujian {
    color: blue;
}
</style>
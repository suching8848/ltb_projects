<template>
    <div class="yilaizhuruchild">
        <h3>依赖组件子组件</h3>
        <p>我从父组件收到的财产是: {{ fuqin }}</p>
        <yilaizhurusun :title="fuqin" :msg="msggggg"></yilaizhurusun>
    </div>
</template>

<script>
import yilaizhurusun from './yilaizhurusun.vue';
export default {
    name: "yilaizhuruchild",
    data() {
        return {
            msggggg: 'english'
        }
    },
    components: {
        yilaizhurusun,
    },
    props: {
        fuqin: {
            type: String,
            default: '1000000',
        }
    }
    // props: ['fuqin']
}
</script>

<style scoped>
.yilaizhuruchild {
    color: yellow;
}
</style>
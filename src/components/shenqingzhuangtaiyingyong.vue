<template>
    <div class="shenqingzhuangtaiyingyong">
        <h2 class="shebei">设备响应式布局</h2>
        <!-- 通过data获取元素和结构，根据网络请求渲染数据 -->
        <p>通过v-for渲染列表数据</p>
        <p>根据网络请求渲染数据</p>
        <ul class="shuoming">
            <li v-for="(value, index) in results" :key="index">
                <h3>{{value.title}}</h3>
                <p>{{value.key}}</p>
                <img :src="value.img" :alt="value.title" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "shenqingzhuangtaiyingyong",
    data() {
        return {
            results: []
        };
    },
    beforeCreate() {
        console.log(this.$refs.name, "beforeCreate");
    },
    created() {
        console.log(this.$refs.name, "created");
    },
    beforeMount() {
        console.log(this.$refs.name, "beforeMount");
    },
    mounted() {
        console.log(this.$refs.name, "mounted");
        this.results = [
            {
                "key": "102094969",
                "qsqintl": "a",
                "type": "1",
                "title": "双人游戏大全",
                "url": "http://360game.360.cn/flash/102094968.html",
                "game": "{\"type\":\"flashgame\",\"appid\":\"102094968\"}",
                "name": "双人游戏大全",
                "img": "//p.qq.com/dap/astore/74f4c8b1da409f34b63be9a699945af08.png"
            },
            {
                "key": "102144745",
                "qsqintl": "a",
                "type": "1",
                "title": "双人游戏大全",
                "url": "http://360game.360.cn/flash/102144745.html",
                "game": "{\"type\":\"flashgame\",\"appid\":\"102144745\"}",
                "name": "双人游戏大全",
                "img": "//p.qq.com/dap/astore/101c42f17a158def57.png"
            },
            {
                "key": "102144642",
                "qsqintl": "a",
                "type": "1",
                "title": "双人游戏大全",
                "url": "http://360game.360.cn/flash/102144642.html",
                "game": "{\"type\":\"flashgame\",\"appid\":\"102144642\"}",
                "name": "双人游戏大全",
                "img": "//p.qq.com/dap/astore/8017e7ccc02fe8ed7.png"
            }
        ];
    }
};
</script>

<style scoped>
.shenqingzhuangtaiyingyong {
    color: #008000;
}
</style>
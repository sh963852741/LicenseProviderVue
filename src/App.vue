<template>
    <component :is="layoutName">
        <transition name="fade" mode="out-in" :duration="250">
            <router-view></router-view>
        </transition>
    </component>
</template>

<script>
export default {
    name: "app",
    data(){
        return{
            layoutName: "normal-layout"
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

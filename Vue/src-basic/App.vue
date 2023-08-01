<template>
    <div class="demo">
        <!-- 使用logo -->
        <img src="./assets/logo.png" alt="logo">
        <!-- 使用组件 -->
        <school></school>
        <student></student>
    </div>

</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        //注册组件
        components:{
            School,
            Student
        }
}
</script>

//设置为less 不写默认为css
<style lang="less">
    .demo{
        background-color: rgb(13, 145, 233);
        .size{
            font-size: 40px;
        }
    }

</style>
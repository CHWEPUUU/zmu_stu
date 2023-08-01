<template>
    <el-button type="primary" @click="login(form)">登录</el-button>        
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "LoginButton",
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
        }
    }, 
 
    methods: {
        ...mapActions('user',['login']),

    },   
    mounted() {
        //挂载前先获取数据
        this.$bus.$on('loginInfo',(data)=>{
            this.form = data    
		})
    }

}
</script>

<style lang="scss" scoped>

</style>
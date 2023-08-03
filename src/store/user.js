//引入Vue
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
import router from '../router'
Vue.use(VueRouter)

export default {
    namespaced:true,
    //响应组件中的动作 迎宾业务逻辑
    actions:{
        login(context,value){
            //登录
            Vue.prototype.$axios.post('/login',{
                username: value.username,
                password: value.password
            }).then(
                response => {
                    if(response.data === "admin"){
                        //先存放再重定位
                        sessionStorage.setItem('state',true)
                        sessionStorage.setItem('username',value.username)

                        context.commit('LOGIN',value)

                        router.push("/welcome").catch(()=>{})  
                    }else{
                        Vue.prototype.$message.error('您输入的账号或密码错误，请重新输入！');
                    }
                },
                error => {
                    console.log(error.message)
                }
            )
        },          
        
    },
    //操作数据
    mutations:{
        LOGIN(state,value){
            state.username = value.username,
            state.password = value.password
        }
        
    },
    //存储数据
    state:{
        username:'',
        password:'',       
    },
    //加工数据
    getters:{
        
    }
}
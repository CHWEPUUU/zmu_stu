import vue from 'vue'
//npm i vuex@3
import vuex from 'vuex'
vue.use(vuex)

const userInfo = {
    actions:{
    },
    mutations:{},
    state:{}
    ,
    getters:{},
}

export default new vuex.Store({
    modules:{
        userInfo,
    }
})

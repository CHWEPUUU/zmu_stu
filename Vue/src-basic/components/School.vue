<template>
   <div>
       <h2 class="sty size">{{name}}</h2>
    </div>  
</template>

<script>
export default {
    name:'School',  
    data(){
     return{
         name:'ZMU'
     } 
    },      
}
</script>

// scoped 避免重名
<style scoped>
    .sty{
        background-color: brown;
    }

</style>
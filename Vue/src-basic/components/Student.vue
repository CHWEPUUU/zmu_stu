<template>
  <div>
    <h2 class="sty">{{name}}</h2>
  </div>
</template>

<script>
  export default {
        name:'Student',
        data() {
            return {
                name:'PU'
            }
        },
}
</script>

// scoped 避免重名
<style scoped>
  .sty{
    background-color: blueviolet;
  }

</style>
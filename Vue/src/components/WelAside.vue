<template>
  <el-aside  width="250px" style="background-color: rgb(238, 241, 246)">
    <!-- 菜单 -->
    <el-menu :default-openeds="['1']" background-color="rgb(22, 38, 65)"
            text-color="#fff" active-text-color="#ffd04b">
      <!-- 添加图片 -->       
      <img src="../assets/logo.png" class="img">
      <!-- 子菜单 --> 
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-home"></i>基本信息</template>
        <!-- 菜单元素 -->
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="students()">学生信息</el-menu-item>
          <el-menu-item index="1-2" @click="courses()">课程信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>       
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'WelAside',
  methods: {
    //学生信息
    students(){
        this.$router.push({path:'/student_list'})
    },
    //课程信息
    courses(){
        this.$router.push({path:'/course_list'})
    }
  }

}
</script>

<style lang="scss" scoped>
  //子菜单元素选择  
  .el-menu-item.is-active {
    background-color: #134668 !important;
  }
  //子菜单元素悬停
  .el-menu-item:hover {
    background-color: #044923 !important;
  }

  .img{
    background-color: rgb(78, 1, 7);
    width: 100%;
    height: 100%;
  }

</style>
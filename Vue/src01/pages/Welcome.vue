<template>
  <el-container style="height: 700px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-home"></i>基本信息</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="students()">学生信息</el-menu-item>
            <el-menu-item index="1-2" @click="courses()">课程信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
          <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 20px">
      <span>欢迎：{{username}}</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-left: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="dialogFormVisible1 = true">新增学生</el-dropdown-item>
          <el-dropdown-item @click.native="dialogFormVisible2 = true">新增课程</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>     
    </el-header>

  <!-- 增加学生弹窗 -->
  <el-dialog title="学生信息" :visible.sync="dialogFormVisible1" width="30%" center>
    <el-form :model="formStudent">
      <el-form-item label="学号" :label-width="formLabelWidth">
        <el-input  v-model="formStudent.sno" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="formStudent.sname" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-input  v-model="formStudent.ssex" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="年龄" :label-width="formLabelWidth">
        <el-input v-model="formStudent.sage" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="院系" :label-width="formLabelWidth">
        <el-input v-model="formStudent.sdept" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!-- 多个事件用;隔开 -->
          <el-button type="primary" @click="dialogFormVisible1 = false;addStudent()">确 定</el-button>
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        </div>
    </el-dialog>
  <!-- 增加课程弹窗 -->
  <el-dialog title="课程信息" :visible.sync="dialogFormVisible2" width="30%" center>
    <el-form :model="formCourse">
      <el-form-item label="课程号" :label-width="formLabelWidth">
        <el-input v-model="formCourse.cno" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="课程名" :label-width="formLabelWidth">
        <el-input v-model="formCourse.cname" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="先选课程号" :label-width="formLabelWidth">
        <el-input v-model="formCourse.cpno" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="学分" :label-width="formLabelWidth">
        <el-input v-model="formCourse.ccredit" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <!-- 多个事件用;隔开 -->
      <el-button type="primary" @click="dialogFormVisible2 = false;addCourse()">确 定</el-button>
      <el-button @click="dialogFormVisible2 = false">取 消</el-button>
    </div>
</el-dialog>
    
    <el-main>
      <!-- 副容器内容 -->
     <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name:'Welcome',
  //刷新页面
  inject: ['reload'],
  data() {
      return {
        //获取用户名         
        username:sessionStorage.getItem('username'),
        //默认不展示弹框
        dialogFormVisible1: false,
        dialogFormVisible2: false,
        formLabelWidth: '100px',
        //学生信息
        formStudent: {
          sno: '',
          sname: '',
          ssex: '',
          sage: '',
          sdept: '',
        },
        //课程信息
        formCourse:{
          cno: '',
          cname: '',
          cpno: '',
          ccredit: 0,
        }
      }
  },
  methods: {
    //展示学生表
    students(){
      //路由跳转
      this.$router.push({
          path:'/student_list',
      }).catch(()=>{})
    },
    //展示课程表
    courses(){
      //路由跳转
      this.$router.push({
          path:'/course_list',
      }).catch(()=>{})
    },
    //弹框添加学生
    addStudent(){
      //post传对象
      this.$axios.post('/add_student',this.formStudent)
      //刷新
      this.reload()
    },
    addCourse(){
      //post传对象
      this.$axios.post('/add_course',this.formCourse)
      //刷新
      this.reload()  
    }
  }
};
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
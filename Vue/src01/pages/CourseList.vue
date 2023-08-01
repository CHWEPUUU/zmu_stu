<template>
 <div>
  <el-table
  :data="tableData"
  border
  style="width:41%">
  <el-table-column
    fixed
    prop="cno"
    label="课程号"
    width="100">
  </el-table-column>
  <el-table-column
    prop="cname"
    label="课程名"
    width="100">
  </el-table-column>
  <el-table-column
    prop="cpno"
    label="先选课程号"
    width="100">
  </el-table-column>
  <el-table-column
    prop="ccredit"
    label="学分"
    width="60">
  </el-table-column>
  <el-table-column
    fixed="right"
    label="操作"
    width="100">
    <template slot-scope="scope">
      <el-button @click="handleClick(scope.row)" type="text" >查看</el-button>
      <el-button type="text" @click="dialogFormVisible = true;edit(scope.row)">编辑</el-button>
    </template>
  </el-table-column>
  </el-table>

  <!-- 编辑课程信息弹窗 -->
  <el-dialog title="课程信息" :visible.sync="dialogFormVisible" width="30%" center>
    <el-form :model="form">
      <el-form-item label="课程号" :label-width="formLabelWidth">
        <el-input disabled v-model="form.cno" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="课程名" :label-width="formLabelWidth">
        <el-input v-model="form.cname" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="先选课程号" :label-width="formLabelWidth">
        <el-input disabled v-model="form.cpno" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="学分" :label-width="formLabelWidth">
        <el-input v-model="form.ccredit" autocomplete="off" style="width: 150px"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogFormVisible = false;update()">确 定</el-button>
      <el-button @click="dialogFormVisible = false">取 消</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
    name:'CourseList',
    data() {
        return {
          //学生选课信息
          tableData:[],
          //弹窗
          dialogFormVisible: false,
          formLabelWidth: '100px',
          form: {
            cno: '',
            cname: '',
            cpno: '',
            ccredit: 0,
          },
        }
    },
    methods: {
      //查看选择该课程的学生信息
      handleClick(row) {
        //路由跳转 query传参
        this.$router.push({
          path:'/course_info',
          query:{
            course:row
          }
        }).catch(()=>{})
      },
      //编辑课程信息默认内容
      edit(row){
        this.form = row
      },
      //更新编辑内容
      update(){
        //post传对象
        this.$axios.post('/student/edit',this.form)   
      }
    },
    //获取课程信息
    beforeMount () {
      this.$axios.post('/student/course').then(
        response => {
          this.tableData = response.data
        },
        error => {
          console.log(error.message)
        })
    }
}
</script>

<style>

</style>
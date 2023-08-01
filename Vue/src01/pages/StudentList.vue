<template>
  <div>
    <el-table
    :data="tableData"
    border
    style="width:52%">
    <el-table-column
      fixed
      prop="sno"
      label="学号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sname"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="ssex"
      label="性别"
      width="60">
    </el-table-column>
    <el-table-column
      prop="sage"
      label="年龄"
      width="60">
    </el-table-column>
    <el-table-column
      prop="sdept"
      label="院系"
      width="100">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="130">
      <template slot-scope="scope">
        <el-button @click="handleCheck(scope.row)" type="text">查看</el-button>
        <el-button type="text" @click="dialogFormVisible = true;handleEdit(scope.row)">编辑</el-button> 
        <el-button @click="handleDelete(scope.row)" type="text">删除</el-button>         
      </template>
    </el-table-column>   
  </el-table>

  <!-- 编辑学生信息 -->
  <el-dialog title="学生信息" :visible.sync="dialogFormVisible" width="30%" center>
  <el-form :model="form">
    <el-form-item label="学号" :label-width="formLabelWidth">
      <el-input disabled v-model="form.sno" autocomplete="off" style="width: 150px"></el-input>
    </el-form-item>
     <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.sname" autocomplete="off" style="width: 150px"></el-input>
    </el-form-item>
     <el-form-item label="性别" :label-width="formLabelWidth">
      <el-input disabled v-model="form.ssex" autocomplete="off" style="width: 150px"></el-input>
    </el-form-item>
     <el-form-item label="年龄" :label-width="formLabelWidth">
      <el-input v-model="form.sage" autocomplete="off" style="width: 150px"></el-input>
    </el-form-item>
     <el-form-item label="院系" :label-width="formLabelWidth">
      <el-input v-model="form.sdept" autocomplete="off" style="width: 150px"></el-input>
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
  //刷新页面
  inject: ['reload'],
  name:'StudentList',
  data() {
      return {
        //获取传回的学生信息
        tableData:[],
        //弹窗默认不显示
        dialogFormVisible: false,
        formLabelWidth: '100px',
        form: {
          sno: '',
          sname: '',
          ssex: '',
          sage: 0,
          sdept: '',
        },
      }
  },
  methods: {
    //查看学生选课信息
    handleCheck(row) {
      //路由跳转 query传参
      this.$router.push({
        path:'/student_info',
        query:{
          student:row
        }
      }).catch(()=>{})
    },
    //编辑学生信息默认内容
    handleEdit(row){
      this.form = row
    },
    //更新编辑内容
    update(){
      //post传对象
      this.$axios.post('/update',this.form)     
    },
    //删除学生信息
    handleDelete(row){
      if(confirm("请确定要删除该信息！")){
        //post传参数
      this.$axios.get('/delete',{
          params:{
            key:row.sno
          }})      
        //刷新页面
        this.reload()
      }      
    }
  },
  //获取学生信息
  beforeMount () {
    //从后端获取jason数据给tableData
    this.$axios.post('/student_list').then(
        response => {
          this.tableData = response.data
        },
        error => {
          console.log(error.message)
        }
      )
    },
}
</script>

<style>

</style>
<template>
  <div>
    <el-table
    :data="tableData"
    border
    style="width:28%">
    <el-table-column
      fixed
      prop="cname"
      label="课程号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="成绩"
      width="80">
    </el-table-column>
    <el-table-column
      prop="ccredit"
      label="学分"
      width="50">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="60">
      <template slot-scope="scope">
        <el-button type="text" @click="edit(scope.row)">编辑</el-button>          
      </template>
    </el-table-column>   
  </el-table>
  </div>
  
</template>

<script>
export default {
	name:'StudentInfo',
	data() {
		return {
			tableData:[],
		}
	},
  //获取传回的学生选课信息
	beforeMount(){
    // get传参 将路由query传参的学生学号
    this.$axios.get('/student/sc',{
      params:{
        sno:this.$route.query.student.sno
      }
    }).then(
          response => {
            this.tableData = response.data
          },
          error => {
            console.log(error.message)
          })
  },
}
</script>

<style>

</style>
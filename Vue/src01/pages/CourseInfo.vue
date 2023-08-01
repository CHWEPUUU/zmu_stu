<template>
  <div>
    <el-table
    :data="tableData"
    border
    style="width:28%">
    <el-table-column
      fixed
      prop="sdept"
      label="院系"
      width="90">
    </el-table-column>
    <el-table-column
      prop="sname"
      label="姓名"
      width="90">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="成绩"
      width="50">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="65">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>          
      </template>
    </el-table-column>   
  </el-table>
  </div>
  
</template>

<script>
export default {
	name:'CourseInfo',
	data() {
		return {
      //选课学生信息
			tableData:[],
		}
	},
  //获取数据
	beforeMount(){
    //get传参 将路由query传参的课程号
    this.$axios.get('/student/cs',{
		params:{
      cno:this.$route.query.course.cno
		}
	}).then(
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
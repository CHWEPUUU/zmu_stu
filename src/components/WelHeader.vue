<template>
  <div>
    <span>欢迎：{{username}}</span>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-left: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="showDialog1()">新增学生</el-dropdown-item>
        <el-dropdown-item @click.native="showDialog2()">新增课程</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> 

    <!-- 弹窗 -->
    <DialogAddStu></DialogAddStu>
    <DialogAddCou></DialogAddCou>     
  </div>
</template>

<script>
import {mapState} from 'vuex'
import DialogAddStu from './DialogAddStu.vue'
import DialogAddCou from './DialogAddCou.vue'
export default {
  name: 'WelHeader',
  computed: {
    ...mapState('user',['username']),
  },
  components: {
    DialogAddStu,
    DialogAddCou
  },
  methods: {
    showDialog1() {
      this.$bus.$emit('dialogFormVisible1',true)
    },
    showDialog2() {
      this.$bus.$emit('dialogFormVisible2',true)
    }  
  }
}
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
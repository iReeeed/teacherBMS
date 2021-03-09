<template>
  <div class="app-container">
    <h3>基本信息</h3>
    <div class="tea-info">
      <span class="star">*</span>姓名:
      <el-input v-model="tea_name" size="medium" placeholder="请输入姓名" />
      <span class="star">*</span>民族:
      <el-input v-model="tea_nation" size="medium" placeholder="请输入民族" />
    </div>
    <div class="tea-info">
      <span class="star">*</span>编号:
      <el-input v-model="tea_num" size="medium" placeholder="请输入编号" />
      <span class="star">*</span>密码:
      <el-input v-model="tea_psd" size="medium" placeholder="请输入编号" />
    </div>
    <div class="tea-info">
      <span class="star">*</span>籍贯:
      <el-input v-model="tea_native" size="medium" placeholder="请输入编号" />邮箱:
      <el-input v-model="tea_email" size="medium" placeholder="请输入编号" />
    </div>
    <div class="tea-info">
      <span class="star">*</span>出生年月:
      <el-input v-model="tea_birth" size="medium" placeholder="请输入编号" />
      <span class="star">*</span>身份证号:
      <el-input v-model="tea_id" size="medium" placeholder="请输入编号" />
    </div>
    <div class="tea-info">
      <span class="star">*</span>教师类型:
      <el-input v-model="tea_level" size="medium" placeholder="请输入编号" />
      <span class="star">*</span>联系方式:
      <el-input v-model="tea_tel" size="medium" placeholder="请输入编号" />
    </div>
    <div class="tea-info">
      <span class="star">*</span>现住址:
      <el-input v-model="tea_address" size="medium" placeholder="请输入编号" />
    </div>
    <div class="tea-info">
      备注：<el-input v-model="tea_beizhu" type="textarea" :rows="2" placeholder="请输入内容" class="beizhu" />
      <el-button type="primary" style="position:absolute;right:200px;bottom:30px">添加</el-button>
      <el-button type="primary" style="position:absolute;right:100px;bottom:30px">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTeacher',
  data() {
    return {
      tea_name: '',
      tea_nation: '',
      tea_num: '',
      tea_psd: '',
      tea_native: '',
      tea_email: '',
      tea_birth: '',
      tea_id: '',
      tea_level: '',
      tea_tel: '',
      tea_address: '',
      tea_beizhu: ''
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
.tea-info {
  padding: 5px 100px;
}
.el-input {
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 50px;
  width: 200px;
}
.star {
  color: red;
}
.beizhu{
  margin-top: 30px;
  width: 500px;
}
.el-button{
  width: 80px;
}
</style>

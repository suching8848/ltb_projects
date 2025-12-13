<template>
  <div class="element-form">
    <h3 class="title">Element Plus 表单组件</h3>
    <el-form :model="form" label-width="100px" style="max-width: 600px;">
      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number v-model="form.age" :min="0" :max="120" placeholder="请输入年龄"></el-input-number>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.gender">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="爱好">
        <el-checkbox-group v-model="form.hobbies">
          <el-checkbox label="读书"></el-checkbox>
          <el-checkbox label="运动"></el-checkbox>
          <el-checkbox label="音乐"></el-checkbox>
          <el-checkbox label="旅行"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="城市">
        <el-select v-model="form.city" placeholder="请选择城市">
          <el-option label="北京" value="beijing"></el-option>
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="广州" value="guangzhou"></el-option>
          <el-option label="深圳" value="shenzhen"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="form.introduction" :rows="4" placeholder="请输入个人简介"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <div v-if="submitted" class="result">
      <h4>提交结果：</h4>
      <pre>{{ JSON.stringify(form, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  age: null,
  gender: 'male',
  hobbies: [],
  city: '',
  introduction: ''
})

const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
  console.log('表单数据:', form)
}

const resetForm = () => {
  Object.assign(form, {
    name: '',
    age: null,
    gender: 'male',
    hobbies: [],
    city: '',
    introduction: ''
  })
  submitted.value = false
}
</script>

<style scoped>
.element-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
}

.title {
  color: #333;
  margin-bottom: 20px;
  font-size: 18px;
}

.result {
  margin-top: 20px;
  padding: 15px;
  background-color: #e8f4fc;
  border-radius: 4px;
  border: 1px solid #b3d8ff;
}

.result h4 {
  margin-bottom: 10px;
  color: #1890ff;
}

.result pre {
  margin: 0;
  white-space: pre-wrap;
  font-family: monospace;
  font-size: 14px;
}
</style>
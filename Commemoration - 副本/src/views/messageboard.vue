<template>
  <div class="body_container">
    <div class="me-box">
      <div class="one">
        <el-form :model="form" :rules="messagerules" ref="messageruleFormref" label-width="auto"
          style="max-width: 300px;padding: 20px;">
          <h2 style="color: white;">留言建议</h2>
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="请输入昵称" style="height: 50px;" />
          </el-form-item>

          <el-form-item prop="content">
            <el-input v-model="form.content" placeholder="请输入留言内容" type="textarea" class="custom-textarea" />
          </el-form-item>

          <el-form-item style="display: flex;">
            <el-button type="primary" @click="addmessage">创建留言</el-button>
            <el-button @click="clearmessage" style="margin-left: auto;">清空留言</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="one">
        <div style="height: 400px;width: 300px;padding: 20px;">
          <h2 style="color: white;">留言板</h2>

          <div v-for="(item, index) in messagelist" :key="index"
            style="width: 240px; background:linear-gradient(to right,pink,skyblue); border-radius: 8px; padding: 10px; margin-bottom: 10px;">
            <img src="../assets//MessageboardPicture//img.jpg"
              style="height: 40px; width: 40px; border-radius: 50%; float: left; margin-right: 10px;">
            <div style="overflow: hidden;">
              <div style="font-weight: bold; color: #333;">{{ item.name }}</div>
              <div style="margin-top: 5px; font-size: 14px; color: #555;line-height: 1.5;">
                {{ item.content }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';
import { Addmessage, Getmessage } from '../apis/messageboard';


const messagelist = ref([])

const form = ref({
  name: '',
  content: ''
})

const messagerules = ref({
  name: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  content: [
    { required: true, message: '留言内容不能为空', trigger: 'blur' }
  ]
})

const messageruleFormref = ref(null)

const addmessage = () => {
  messageruleFormref.value.validate((valid) => {
    if (valid) {
      //深度拷贝
      const newMessage = { ...form.value };
      messagelist.value.push(newMessage)
      clearmessage()
    }
  })
}

const clearmessage = () => {
  messageruleFormref.value.resetFields()
}

</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body_container {
  height: 100vh;
  width: 100vw;
  background: url('../assets//MessageboardPicture//bg1.jpg') no-repeat;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.me-box {
  height: 500px;
  width: 1200px;
  box-shadow: inset 0 0 15px rgba(255, 255, 255);
  background: linear-gradient(135deg,
      rgba(87, 194, 255, 0.5)0%,
      rgba(247, 112, 184, 0.5)50%,
      rgba(140, 114, 236, 0.5)100%);

  background-size: 200% 200%;

  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 500px;

  animation: shine 3s infinite linear;
}

@keyframes shine {
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 0% 0%;
  }
}

.one {
  height: 400px;
  width: 300px;
  /* background-color: #fff; */
  box-shadow: inset 0 0 15px rgba(255, 255, 255);
  border-radius: 10px;
}

.custom-textarea textarea {
  height: 180px !important;
  /* 强制生效 */
  resize: none;
  /* 禁用用户拖拽改变大小 */
  min-height: auto !important;
  /* 覆盖 Element 的默认 min-height */
}
</style>
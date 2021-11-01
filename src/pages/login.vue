<script setup>
import {ref} from 'vue'
import userAPI from '@/api/userAPI.js';
import {ElMessageBox} from "element-plus";

let id = ref('');
let password = ref('');

function handleClickLogin() {
  login();
}

async function login() {
  try {
    await userAPI.login({
      params: {
        id,
        password
      }
    });
  } catch (e) {
    await ElMessageBox.alert('로그인에 실패하였습니다.', '로그인 실패');
  }
}

</script>

<template>
  <div class="page-login-root">
    <div class="form-container">
      <el-form ref="form" label-position="right" :label-width="72" @submit="login">
        <el-form-item label="ID">
          <el-input v-model="id"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item align="right">
          <el-button type="primary" @click="handleClickLogin">로그인</el-button>
          <el-button>회원가입</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-login-root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > .form-container {
    width: 300px;
  }
}
</style>

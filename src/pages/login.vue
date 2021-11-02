<script setup>
import {ref} from 'vue'
import userAPI from '@/api/userAPI.js';
import {ElMessageBox} from "element-plus";
import {useRouter} from "vue-router";

const router = useRouter();

let email = ref('');
let password = ref('');

async function handleClickLogin() {
  try {
    await login();
    await ElMessageBox.alert('로그인에 성공하셨습니다.', '로그인 성공');
    await router.push('/posts');
  } catch (e) {
    await ElMessageBox.alert(e.message, '로그인 실패');
  }
}

function login() {
  return userAPI.login(email.value, password.value);
}

</script>

<template>
  <div class="page-login-root">
    <h1>Login</h1>
    <div class="form-container">
      <el-form ref="form" label-position="right" :label-width="72" @submit="login">
        <el-form-item label="Email">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item align="right">
          <el-button type="primary" @click="handleClickLogin">로그인</el-button>
          <router-link to="/join" class="link-to-join">
            <el-button>
              회원가입
            </el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-login-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > .form-container {
    width: 300px;
  }

  .link-to-join {
    margin-left: 10px;
  }
}
</style>

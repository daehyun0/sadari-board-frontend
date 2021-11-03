<script setup>
import userAPI from '@/api/userAPI.js';
import userInfo from "@/global/user-info";

import {ref} from 'vue'
import {ElMessageBox} from "element-plus";
import {useRouter} from "vue-router";
import accessToken from "@/utils/accessToken";

const router = useRouter();

let email = ref('');
let password = ref('');

async function handleClickLogin() {
  try {
    const {JWT} = await login();
    await router.push('/products');

    const payload = JWT.split('.')[1];
    userInfo.set(payload);
    accessToken.set(JWT);
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
        <el-form-item label="이메일">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호">
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

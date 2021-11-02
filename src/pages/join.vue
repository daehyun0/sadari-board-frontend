<script setup>
import userAPI from '@/api/userAPI'
import {ref} from "vue";
import {useRouter} from "vue-router";
import {ElMessageBox} from "element-plus";

const router = useRouter();

let email = ref('');
let password = ref('');
let name = ref('');
let phoneNum = ref('');

async function handleClickJoin() {
  try {
    await join();
    await ElMessageBox.alert("회원가입 완료", "회원가입 성공");
    await router.push('/login')
  } catch (e) {
    await ElMessageBox.alert(e.message, "회원가입 실패");
  }
}

async function join() {
  return userAPI.join(email.value, password.value, name.value, phoneNum.value);
}

function handleClickCancel() {
  router.back();
}
</script>

<template>
  <div class="page-join-root">
    <h1>Join</h1>
    <div class="form-container">
      <el-form ref="form" label-position="right" :label-width="72" @submit="join">
        <el-form-item label="Email">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="PhoneNum">
          <el-input v-model="phoneNum"></el-input>
        </el-form-item>
        <el-form-item align="right">
          <el-button @click="handleClickCancel">취소</el-button>
          <el-button type="primary" @click="handleClickJoin">회원가입</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-join-root {
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
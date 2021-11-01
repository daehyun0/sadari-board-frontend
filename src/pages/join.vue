<script setup>
import userAPI from '@/api/userAPI'
import {ref} from "vue";
import {useRouter} from "vue-router";
import {ElMessageBox} from "element-plus";

let id = ref('');
let password = ref('');

const router = useRouter();

async function handleClickJoin() {
  await userAPI.join({
    id,
    password,
  });

  await ElMessageBox.alert("회원가입 완료", "회원가입 성공");
  await router.push('/login')
}

function handleClickCancel() {
  router.back();
}
</script>

<template>
  <div class="page-join-root">
    <h1>Join</h1>
    <div class="form-container">
      <el-form ref="form" label-position="right" :label-width="72" @submit="login">
        <el-form-item label="ID">
          <el-input v-model="id"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="password" type="password"></el-input>
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
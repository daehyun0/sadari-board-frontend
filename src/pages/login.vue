<script setup>
import {ref} from 'vue'

let id = ref('');
let password = ref('');

</script>

<template>
  <div class="form-container">
    <el-form ref="form" label-position="right" :label-width="72">
      <el-form-item label="ID">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.form-container
</style>

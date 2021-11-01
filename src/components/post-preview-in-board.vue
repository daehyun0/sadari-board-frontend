<script setup>
const props = defineProps({
  posts: Array,
});
</script>

<template>
  <el-table :data="posts">
    <el-table-column label="번호" prop="no"></el-table-column>
    <el-table-column label="제목" prop="title"></el-table-column>
    <el-table-column label="작성자" prop="writer"></el-table-column>
    <el-table-column label="작성일" prop="createdAt"></el-table-column>
  </el-table>
</template>

<style scoped lang="scss">
</style>
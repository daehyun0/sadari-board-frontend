<script setup>
defineProps({
  total: Number,
  currentPage: Number
});
</script>

<template>
  <el-pagination small layout="prev, pager, next" :total="total"> </el-pagination>
</template>

<style scoped>

</style>
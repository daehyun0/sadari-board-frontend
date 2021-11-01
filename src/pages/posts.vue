<script setup>
import PostPreviewInBoard from '@/components/post-preview-in-board.vue'
import BoardAPI from '@/api/post.js'
import {reactive} from "vue";

const posts = reactive([]);
BoardAPI.lists().then(postsFromRepo => {
  postsFromRepo.forEach(post => {
    posts.push(post);
  });
});

</script>

<template>
  <div class="page-posts-root">
    <h1>Posts</h1>
    <post-preview-in-board :posts="posts"></post-preview-in-board>
  </div>
</template>

<style scoped lang="scss">
</style>
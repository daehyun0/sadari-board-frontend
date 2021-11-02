<script setup>
import PostPreviewInBoard from '@/components/post-preview-in-board.vue'
import PostsPagination from '@/components/posts-pagination.vue'
import BoardAPI from '@/api/products.js'
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const posts = reactive([]);
BoardAPI.lists().then(postsFromRepo => {
  postsFromRepo.forEach(post => {
    products.push(post);
  });
});

let page = ref(1);
let countPerPage = ref(10);

function getDataFromQuery() {
  page = Number(route.query.page) || page.value;
  countPerPage = Number(route.query.count) || countPerPage.value;
}

getDataFromQuery();

</script>

<template>
  <div class="page-posts-root">
    <h1>Posts</h1>
    <post-preview-in-board :posts="products"></post-preview-in-board>
    <posts-pagination :current-page="page" :page-size="countPerPage" :total="200"></posts-pagination>
  </div>
</template>

<style scoped lang="scss">
</style>
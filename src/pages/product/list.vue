<template>
  <div class="page-products-root">
    <h1>Products</h1>
    <div class="list">
      <router-link v-for="product in products"
                   class="product-preview"
                   :to="'/products/' + product.idx">
        <product-preview-in-board :product="product"></product-preview-in-board>
      </router-link>
    </div>
    <!--        <posts-pagination :current-page="page" :page-size="countPerPage" :total="200"></posts-pagination>-->
  </div>
</template>

<script setup>
import ProductPreviewInBoard from '@/components/product-preview-in-board.vue'
import BoardAPI from '@/api/products.js'
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import ProductInList from "@/model/product-in-list";

const route = useRoute();
const products = reactive([]);
BoardAPI.lists().then(({recommendResult}) => {
  recommendResult.forEach(({
                             productIdx,
                             productImgUrl,
                             productName,
                             productPrice,
                             productReviewCount,
                             avgReviewScore
                           }) => {
    products.push(new ProductInList(productIdx, productImgUrl, productName, productPrice, avgReviewScore, productReviewCount));
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

<style scoped lang="scss">
.page-products-root {
  width: 100%;

  & > .list {
    display: flex;
    flex-wrap: wrap;

    .product-preview + .product-preview {
      margin-left: 12px;

      &:nth-child(3n + 1) {
        margin-left: 0;
      }

      &:nth-child(n + 4) {
        margin-top: 56px;
      }
    }
  }
}
</style>
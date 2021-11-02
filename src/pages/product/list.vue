<template>
  <div class="page-products-root">
    <h1>Products</h1>
    <div class="list">
      <product-preview-in-board v-for="product in products"
                                :product="product"
                                class="component-product-preview"></product-preview-in-board>
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
  recommendResult.forEach(({productImgUrl, productName, productPrice, productReviewCount, avgReviewScore}) => {
    products.push(new ProductInList(productImgUrl, productName, productPrice, avgReviewScore, productReviewCount));
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

    .component-product-preview + .component-product-preview {
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
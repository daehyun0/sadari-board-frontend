<script setup>
const props = defineProps({
  product: Object,
});
</script>

<template>
  <el-card :body-style="{ padding: '0px' }"
           class="component-product-preview-in-lists">
    <img
        :src="product.image"
        class="image"
        alt="product thumbnail"
    />
    <div style="padding: 14px 0">
      <h2 class="name">{{ product.name }}</h2>
      <h3 class="price">{{ product.price }}원</h3>
      <div class="review">
        <el-rate v-model="product.avgScore"
                 disabled
                 show-score
                 text-color="#ff9900"
                 score-template="{value} points"></el-rate>
        <span class="review-count">({{ product.reviewCount }})</span>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.component-product-preview-in-lists {
  display: inline-block;
  max-width: 224px;

  .image {
    width: 224px;
    height: 224px;
  }

  .review {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;

    & .review-count {
      margin-left: 4px;
    }
  }
}
</style>
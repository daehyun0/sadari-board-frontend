<template>
  <div class="page-products-detail-root">
    <div class="info-header">
      <img :src="productImageUrl" alt="thumbnail">
      <div class="info-without-image-container">
        <div class="text-info">
          <h2 class="product-name">{{ product?.productName }}</h2>
          <h3 class="product-price">{{ product?.productPrice }}원</h3>
          <div class="avg-score">
            <el-rate v-model="productAvgReviewScore"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value} points"></el-rate>
          </div>
          <div class="review">

            <div class="review-container">
              <el-card class="review-content" v-for="review in productReviews">
                <div>{{ review?.contents }}</div>
                <el-rate v-model="review.reviewScore"
                         disabled
                         show-score
                         text-color="#ff9900"
                         score-template="{value} points"></el-rate>
              </el-card>
            </div>
          </div>
        </div>
        <div class="click-to-action-container">
          <el-button type="primary">구매하기</el-button>
          <el-button>장바구니</el-button>
        </div>
      </div>
    </div>

    <el-skeleton class="info-detail" :loading="true" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 100%; height: 2560px;" />
      </template>
    </el-skeleton>
  </div>
</template>

<script>
import ProductsAPI from '@/api/products';

export default {
  async created() {
    this.productAPIResult = (await ProductsAPI.detail(this.$route.params.productIdx))
  },

  data() {
    return {
      productAPIResult: {},
      rate: 3.2222,
    }
  },

  computed: {
    product() {
      return this.productAPIResult?.productResult && this.productAPIResult?.productResult[0];
    },

    productImageUrl() {
      return 'http://' + (this.productAPIResult?.productResult && this.productAPIResult?.productResult[0]?.productImgUrl)
    },

    productReviews() {
      return this.productAPIResult?.productReviewContentResult;
    },

    productAvgReviewScore() {
      return this.productAPIResult?.productReviewScoreResult && this.productAPIResult?.productReviewScoreResult[0]?.avgReviewScore
    }
  }
}

</script>

<style scoped lang="scss">
.page-products-detail-root {
  width: 100%;

  & > .info-header {
    display: flex;
    justify-content: space-between;

    img {
      width: 480px;
      height: 480px;
    }

    .info-without-image-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 480px;
      margin-left: 28px;

      & > .text-info {
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        height: calc(100% - 56px);

        & > .review {
          margin-top: 16px;
          overflow-y: scroll;
          flex: 0 1 auto;

          &::-webkit-scrollbar {
            display: none;
          }

          .review-content + .review-content {
            margin-top: 4px;
          }
        }
      }

      & > .click-to-action-container {
        margin-top: 16px;
        flex: 0 0 auto;
      }
    }
  }

  & > .info-detail {
    width: 100%;
    margin-top: 24px;
  }
}
</style>
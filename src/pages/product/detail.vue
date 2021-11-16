<template>
  <div class="page-products-detail-root">
    <div class="info-header">
      <img :src="productImageUrl" alt="thumbnail">
      <div class="info-without-image-container">
        <div class="text-info">
          <h2 class="product-name">{{ product?.productName }}</h2>
          <h3 class="product-price">{{ productPrice }}원</h3>
          <div class="avg-score">
            <el-rate v-model="productAvgReviewScore"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value} points"></el-rate>
          </div>
          <div class="review">

            <div class="review-container">
              <el-card class="review-content" v-for="(review, idx) in productReviews">
                <el-icon class="remove"
                         :size="16"
                         v-if="isReviewWrittenByUser(idx, myUserName)"
                         @click="handleClickRemoveReview">
                  <close/>
                </el-icon>

                <div>{{ review?.contents }}</div>
                <el-rate v-model="review.reviewScore"
                         disabled
                         show-score
                         text-color="#ff9900"
                         :score-template="'{value} points'"></el-rate>
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
        <el-skeleton-item variant="image" style="width: 100%; height: 480px;"/>
      </template>
    </el-skeleton>

    <el-card class="write-review-container" v-if="!isExistReview">
      <h3>리뷰 작성하기</h3>
      <el-rate v-model="rate"
               show-score
               text-color="#ff9900"
               score-template="{value} points"></el-rate>
      <div class="layout-horizontal-form-item">
        <el-input type="textarea"
                  v-model="reviewContents"
                  :rows="2"></el-input>
        <el-button type="primary" @click="handleClickSubmitReview">작성하기</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import UserInfo from '@/global/user-info.js'
import ProductsAPI from '@/api/products';
import ReviewAPI from '@/api/review';
import {ElMessageBox} from "element-plus";
import {Close} from '@element-plus/icons'
import ReviewScoreFormatter from "@/utils/ReviewScoreFormatter";

export default {
  created() {
    this.fetchProductDetail();
  },

  methods: {
    async fetchProductDetail() {
      this.productAPIResult = (await ProductsAPI.detail(this.$route.params.productIdx))
    },

    async handleClickSubmitReview() {
      try {
        await this.addReview()
        await ElMessageBox.alert("상품평이 등록되었습니다.", "상품평 등록 성공");
        this.fetchProductDetail();
      } catch (e) {
        await ElMessageBox.alert(e.message, "상품평 등록 실패");
      }
    },

    async handleClickRemoveReview() {
      try {
        await this.removeReview()
        await ElMessageBox.alert("상품평이 삭제되었습니다.", "상품평 삭제 성공");
        this.fetchProductDetail();
      } catch (e) {
        await ElMessageBox.alert(e.message, "상품평 삭제 실패");
      }
    },

    addReview() {
      return ReviewAPI.add(this.$route.params.productIdx, this.reviewContents, this.rate);
    },

    removeReview() {
      return ReviewAPI.remove(this.$route.params.productIdx, this.myUserIdx);
    },

    isReviewWrittenByUser(reviewIdx, userName) {
      return this.productAPIResult?.productReviewContentResult &&
          (this.productAPIResult?.productReviewContentResult[reviewIdx].userName === userName)
    },
  },

  data() {
    return {
      productAPIResult: {},
      rate: 0,
      reviewContents: '',
      myUserName: UserInfo.get('userName')
    }
  },

  components: {
    Close
  },

  computed: {
    product() {
      return this.productAPIResult?.productResult && this.productAPIResult?.productResult[0];
    },

    productPrice() {
      return ReviewScoreFormatter.format(this.product?.productPrice);
    },

    productImageUrl() {
      return 'http://' + (this.productAPIResult?.productResult && this.productAPIResult?.productResult[0]?.productImgUrl)
    },

    productReviews() {
      return this.productAPIResult?.productReviewContentResult;
    },

    productAvgReviewScore() {
      if (!this.productAPIResult?.productReviewScoreResult) {
        return 0;
      }

      if (this.productAPIResult?.productReviewScoreResult.length === 0) {
        return 0;
      }

      return Number(
          ReviewScoreFormatter.format(this.productAPIResult?.productReviewScoreResult[0]?.avgReviewScore)
      );
    },

    isExistReview() {
      if (!this.productAPIResult?.productReviewContentResult) {
        return false;
      }

      return this.productAPIResult?.productReviewContentResult.some(review => review.userName === this.myUserName);
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
      width: 400px;
      height: 400px;
    }

    .info-without-image-container {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 400px;
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

          .review-content {
            position: relative;

            .remove {
              position: absolute;
              top: 8px;
              right: 16px;
              color: var(--el-color-black);
              cursor: pointer;
            }

            & + .review-content {
              margin-top: 4px;
            }
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

  & > .write-review-container {
    margin-top: 24px;

    .layout-horizontal-form-item {
      display: flex;
      justify-content: flex-start;
      margin-top: 24px;

      :deep(button) {
        margin-left: 12px;
      }
    }
  }
}
</style>
<script  setup>
// import { Card, Tag } from 'ant-design-vue'
import { onMounted } from 'vue'
import { useBankStore } from '@/src/store/bankStore'
import { feverAddOneAPI } from '../../../src/services/bank';

const bankStore = useBankStore()
onMounted(() => {
  bankStore.getBankListAction()
})
const itemClick = async(bank) => {
  const { id } = bank
  
  
  uni.navigateTo({
    url: `/pages/bank/sort?id=${id}`,
  })
  await feverAddOneAPI(id)
  
  
}
</script>

<template>
  <div class="bank">
    <div class="question_list">
      <div
        v-for="item in bankStore.bankList"
        :key="item.id"
        @click="itemClick(item)"
      >
        <uni-card class="question_item">
          <div class="center">
            <div class="text">
                <span>【{{ item?.year }}】{{ item?.name }}</span>
            </div>
          </div>
          <view class="bottom">
              <uni-icons class="icon" type="fire-filled" color="rgb(181, 22, 22) " size="24" />
            <view>{{ item.fever }}</view>
          </view>
        </uni-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bank {
  .question_list {
    .question_item {
      border-radius: 12rpx;
	  display: flex;
	  justify-content: space-between;
	  position: relative;
      .center {
        .text {
          font-size: 34rpx;
          color: rgb(51 51 51 / 100%);
        }
      }
      .bottom {
		  position: absolute;
		  right: 20rpx;
		  top: 20rpx;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>

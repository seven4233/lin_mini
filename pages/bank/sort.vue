<script>
export default {
  data() {
    return {
      id: '',
    }
  },
  onLoad(e) {
    this.id = e.id
  },
}
</script>
<script setup>
import { useBankStore } from '@/src/store/bankStore.js'
import { getCurrentInstance } from 'vue'
import { onMounted, onBeforeMount, ref } from 'vue'
const bankStore = useBankStore()

// 拿到题库id
const bankId = ref()
onBeforeMount(() => {
  bankId.value = getCurrentInstance()?.data.id
})
onMounted(() => {
  // 根据题库id获取题库分类
  bankStore.getSortInfoAction(+bankId.value)
})
const itemClick = (item) => {
  console.log(item)
  // go(`/bank/${'1'}/${item.value}`)
  uni.navigateTo({
    url: `/pages/bank/${item.value}?bankId=${bankId.value}`,
  })
}
</script>
<template>
  <view class="question_sort">
    <view class="sort_list">
      <view
        class="sort_item"
        @click="itemClick(item)"
        v-for="item in bankStore.sortArr"
        :key="item.type"
      >
        <view class="sort_name">
          <view class="title">
            {{ item.type }}
            <!-- <Tag v-if="item.type==='判断题'" color="#cd201f" style="transform: scale(0.7)" >new</Tag> -->
            <uni-tag
              v-if="item.type !== '填空题' && bankId === '2'"
              :text="'new'"
              size="normal"
              type="error"
            />
          </view>
        </view>
        <view class="sort_num">
          已做
          <text>{{ item.doneCount }}</text>
          /{{ item.count }}题
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.question_sort {
  .sort_list {
    margin-top: 20rpx;
    display: flex;
    flex-wrap: wrap;

    .sort_item {
      width: 100%;
      height: 180rpx;
      margin-bottom: 20rpx;
      padding: 28rpx 16rpx 14rpx 34rpx;
      transition: all 0.2s ease;
      border-width: 1rpx;
      border-radius: 12rpx;
      border-color: transparent;
      background-color: rgba(248, 248, 248);
      color: rgb(51 51 51 / 100%);
      font-size: 34rpx;

      .sort_name {
        display: flex;
        position: relative;
        align-items: center;
        margin-bottom: 8rpx;

        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          .new {
            position: absolute;
            top: -3rpx;
            left: 5rpx;
            padding: 0 2rpx;
            border: 1rpx solid red;
            border-radius: 10rpx;
            color: red;
            font-size: 12rpx;
          }
        }
      }

      .sort_num {
        color: rgb(187 187 187 / 100%);
        font-size: 32rpx;

        text {
          color: rgb(50 202 153 / 100%);
        }
      }
    }
  }
}
</style>

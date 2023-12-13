<script >
export default {
  data() {
    return {
      id: '',
    }
  },
  onLoad(e) {
    this.id = e.bankId
  },
}
</script>
<script  setup>
import { onMounted, ref, onBeforeMount, getCurrentInstance } from 'vue'
import { useSingleStore } from '@/src/store/singleStore.js'
import { useBankStore } from '@/src/store/bankStore.js'

// 拿到题库id
const bankId = ref()
onBeforeMount(() => {
  bankId.value = getCurrentInstance()?.data.id
})
const singleStore = useSingleStore()
const bankStore = useBankStore()
const cardNumList = ref([
  {
    value: 1,
    done: false,
  },
  {
    value: 2,
    done: false,
  },
  {
    value: 3,
    done: false,
  },
  {
    value: 4,
    done: false,
  },
  {
    value: 5,
    done: false,
  },
])
const currentCardIndex = ref(0)
onMounted(() => {
  singleStore.isSubmit = false
  // 获取单选题列表
  singleStore.getSingleListAction(Number(bankId.value))

  uni.setNavigationBarTitle({
    title: `单选题 - ${bankStore.bankInfo?.name}`,
  })
})

const itemClick = (item, index) => {
  singleStore.selectedAction(item)
  console.log(item)

  // index
}

// 提交
const handleSubmit = () => {
  console.log(singleStore.selectedValue)

  if (!singleStore.isFinished) {
    uni.showModal({
      title: `你还有 ${singleStore.leftQuestion} 道未完成的题目, 确定交卷?`,
      cancelText: '在想想',
      success: async (success) => {
        if (success.confirm) {
          //   发送提交请求
          await singleStore.addFinishedQuestion({
            bankId: bankId.value,
            sort: '单选题',
            correctList: singleStore.correctList ,
          })
          // TODO 跳转已提交页面
		 uni.navigateTo({
		 	url:`/pages/bank/single_submit?bankId=${bankId.value}`,
		 })
        }
      },
    })
  } else {
    uni.showModal({
      title: `小伙子我劝你检查一下?`,
      success: async (success) => {
        if (success.confirm) {
          //   发送提交请求
          await singleStore.addFinishedQuestion({
            bankId: bankId.value,
            sort: '单选题',
            correctList: singleStore.correctList ,
          })
		  uni.navigateTo({
		  	url:`/pages/bank/single_submit?bankId=${bankId.value}`,
		  })
        }
      },
    })
  }
}


const cardNumClick = (index) => {
  currentCardIndex.value = index
}
</script>

<template>
  <div id="single" class="single">
    <div v-show="singleStore.singleList?.length" class="header">
      <div class="header-content">
        <!-- 答题卡圈圈 -->
        <div class="answer_card_list">
          <view style="margin-right: 10rpx; color: #666">答题卡</view>
          <div
            class="answer_card_item"
            v-for="(item, index) in cardNumList"
            :key="item.value"
            @click="cardNumClick(index)"
          >
            <div style="margin-right: 8rpx; padding-top: 4rpx">
              <div
                class="card_num empty"
                :class="{
                  running: index === currentCardIndex,
                  done: singleStore.doneArr?.includes(index),
                }"
              >
                {{ item.value }}
              </div>
            </div>
          </div>
        </div>

        <!-- 提交答案 -->
        <div class="header-submitter">
          <div class="ab" @click="handleSubmit">
            <div class="cd">交卷</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 提交之前 -->
    <div v-if="singleStore.singleList?.length" class="page-wrapper">
      <template v-for="(item, index) in singleStore.singleList" :key="index">
        <!-- 一题 -->
        <div  v-show="index === currentCardIndex" class="item" :ref="index + ''" :id="index + ''">
          <div class="title">
            <view class="question-desc-header">
              <div class="commonClass singleClass">单选题</div>
              <div class="rightAction">
                <div class="collectIcon">
					<uni-icons type="star" size="30"></uni-icons>
                </div>
              </div>
            </view>

            <div class="question-info">
              <div class="question-num">
                <text>{{ index + 1 }}</text>
              </div>
              <div class="question-name">
                <text>【{{ item.question_num }}】{{ item.name }}</text>
              </div>
            </div>
          </div>
          <!-- 选项区 -->
          <div class="question-select">
            <div
              class="option-item"
              :class="{ 'option-item-selected': i.selected === true }"
              v-for="(i, index) in item.options"
              :key="i.value"
              @click="itemClick(i, index)"
            >
              <div class="label">{{ i.value }}</div>
              <div class="content">{{ i.label }}</div>
            </div>
          </div>
        </div>
      </template>

      <!-- 操作区(提交 -->
      <div class="test-submit">
		            <button :disabled="currentCardIndex <= 0" type="primary" @click="currentCardIndex--">上一题</button>
		            <button v-if="currentCardIndex < 4" type="primary" @click="currentCardIndex++">下一题</button>
		            <button v-else  type="primary" @click="handleSubmit">交卷</button>
      </div>
    </div>
    <view v-else>
     <u-empty mode="list" text="题目已经刷完啦" icon="http://cdn.uviewui.com/uview/empty/car.png">
      </u-empty>
    </view>
  </div>
</template>

<style lang="scss" scoped>
.single {
  .header {
    position: sticky;
    z-index: 999;
    top: 0;
    height: 96rpx;
    background-color: rgb(255 255 255);
    box-shadow: 0 1rpx 4rpx 0 rgb(0 0 0 / 2%), 0 2rpx 12rpx 0 rgb(0 0 0 / 4%);

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10rpx 10rpx 20rpx 20rpx;

      // 答题卡圈圈
      .answer_card_list {
        display: flex;
        align-items: center;

        .answer_card_item {
          position: relative;

          .card_num {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            width: 66rpx;
            height: 66rpx;
            border-width: 1rpx;
            border-radius: 100%;
            font-weight: 400;
            line-height: 16rpx;
            cursor: pointer;
            margin: 0 10rpx;
          }

          .empty {
            border: 1rpx solid rgb(240 240 240 / 100%);
            color: rgb(153 153 153 / 100%);
          }

          .running {
            border: 1rpx solid rgb(240 240 240 / 100%);
            border-color: rgb(50 202 153 / 100%);
          }

          .done {
            border: 1rpx solid rgb(148 227 201 / 100%);
            background-color: rgb(238 250 247 / 100%);
            color: rgb(50 202 153 / 100%);
          }

          .error {
            border: 1rpx solid rgb(255 154 118 / 100%);
            background-color: rgb(255 246 243 / 100%);
            color: rgb(255 86 27 / 100%);
          }
        }
      }

      .header-submitter {
        display: flex;
        align-items: center;
        color: rgb(153 153 153);
        font-size: 26rpx;
        font-weight: 500;
        line-height: 16rpx;

        .ab {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 52rpx;
          width: 120rpx;
          margin-right: 16rpx;
          padding-right: 12rpx;
          padding-left: 12rpx;
          border: 1rpx solid rgb(50 202 153 / 100%);
          border-radius: 20rpx;
          color: rgb(50 202 153 / 100%);
          .cd {
            width: 68rpx;
            font-weight: 600;
            line-height: 16rpx;
            text-align: center;
          }
        }
      }
    }
  }

  .page-wrapper {
    position: relative;
    z-index: 998;
    padding: 24rpx 40rpx;
    background: #fff;

    .item {
      padding: 30rpx 0;
      border-bottom: 1rpx dashed #f0f0f0;

      // 题目
      .title {
        margin-bottom: 20rpx;

        .question-desc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12rpx;

          .commonClass {
            padding: 4rpx 8rpx;
            border-radius: 4rpx;
            font-weight: 400;
          }

          .singleClass {
            background-color: rgb(227 243 255);
            color: rgb(0 117 255);
          }

          .rightAction {
            .collectIcon {
              color: rgb(153 153 153);
              cursor: pointer;

              &:hover {
                --tw-text-opacity: 1;

                color: rgb(255 187 77 / var(--tw-text-opacity));
              }
            }
          }
        }

        .question-info {
          display: flex;
          color: rgb(51 51 51);
          font-weight: 600;

          .question-num {
            height: 28rpx;
            margin-right: 4rpx;

            em {
              padding: 0 5rpx;
              border: 1rpx solid #32ca99;
              border-radius: 99%;
              background-color: #fff;
              font-style: normal;
            }
          }

          .question-name {
            flex: 1 1 0%;
            word-wrap: break-word;
            word-break: break-all;
          }
        }
      }

      // 选项区
      .question-select {
        .option-item {
          display: flex;
          margin-top: 26rpx;
          padding: 8rpx 12rpx;
          border: 1rpx solid transparent;
          border-radius: 8rpx;
          cursor: pointer;

          &:first-child {
            margin-top: 0;
          }

          .label {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48rpx;
            height: 48rpx;
            margin-right: 16rpx;
            border: 1rpx solid;
            border-radius: 9999rpx;
            border-color: rgb(221 221 221);
          }

          .content {
            display: flex;
            flex: 1 1 0%;
            color: rgb(51 51 51);
          }
        }

        .option-item-selected {
          border: 1rpx solid rgb(148 227 201);
          background-color: rgb(238 250 247);

          .label {
            border-color: rgb(50 202 153);
            background-color: rgb(50 202 153);
            color: rgb(255 255 255);
          }
        }

        .option-item-error {
          --tw-border-opacity: 1;
          --tw-bg-opacity: 1;

          border-color: rgb(255 187 164);
          background-color: rgb(255 246 243);
        }
      }
    }

    .operation {
      position: relative;
      width: 400rpx;
      margin-top: 50rpx;
      margin-left: 50%;
      transform: translateX(-50%);

      .submit {
        position: absolute;
        right: 0;
      }
    }
  }

  .test-submit {
	
       position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 200rpx;
        z-index: 999;
        background: #002;
		padding-bottom: 30rpx;
        display: flex;
        justify-content: space-around;
        align-items: center;
  }
}
</style>

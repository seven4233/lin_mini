<template>
  <view class="flex-col justify-start page">
    <view class="flex-col group">
      <view class="flex-col justify-start relative group_2">
        <view class="flex-col group_3">
          <view class="flex-col section">
        
            <div class="flex-row items-center search"  >
                <input class="search-input" type="text" placeholder="搜索内容" />
            </div>
			<!-- sort -->
            <view class="flex-row search-history">
              <view class="flex-col justify-start items-center text-wrapper">
                <text class="search-text">牛奶1</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center text-wrapper">
                <text class="search-text">酸奶</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center text-wrapper">
                <text class="search-text">大米</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center text-wrapper">
                <text class="search-text">鸡蛋</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center text-wrapper">
                <text class="search-text">洁柔</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center button">
                <text class="search-text">洗衣液</text>
              </view>
            </view>
          </view>
		  
		  <!-- lunbo -->
          <view class="flex-col items-start relative section_3">
            <text class="text_5">FLOWER</text>
            <text class="font_2 text_6">用一生去遗憾 不如花一份关爱</text>
            <text class="text_7">To regret with one's life is not like to spend one's love</text>
            <view class="flex-col justify-start items-center button_2 text-wrapper_2">
              <text class="font_2">立即抢购</text>
            </view>
            <image class="image_8" src="/static/images/index/a0b84dbf87fcea72bb5d4439d5dcd4d1.png" />
          </view>
        </view>
        <view class="flex-col items-center sort pos_6">
          <image class="image_9" src="/static/images/index/ac411651331fe935e3664d906645ef18.png" />
          <text class="font_4 mt-7">鲜花礼品</text>
        </view>
        <view class="flex-col items-center sort pos_5">
          <image class="image_9" src="/static/images/index/7c438ab4ff5c0eaf9f8a321049c570ef.png" />
          <text class="font_4 text_9 mt-7-5">水果</text>
        </view>
        <view class="flex-col items-center sort pos_4">
          <image class="image_9" src="/static/images/index/47a00f849f8b00d53528b95ec55cc914.png" />
          <text class="font_4 text_8 mt-7-5">买菜</text>
        </view>
        <view class="flex-col items-center sort pos_3">
          <image class="image_9" src="/static/images/index/4c5f7a781b733358ace16bb2e09ca8fe.png" />
          <text class="font_4 mt-7">超市</text>
        </view>
        <view class="flex-col items-center group_1 pos_7">
          <image class="image_9" src="/static/images/index/39964c42115416fc3b41a37eca855663.png" />
          <text class="font_4 mt-7-5">烘焙蛋糕</text>
        </view>
      </view>
      <view class="flex-col justify-start mt-4-5">
        <view class="flex-row justify-center group_9">
          <view class="section_4"></view>
          <view class="section_5 ml-4-5"></view>
        </view>
      </view>
    </view>
  </view>
</template>


<style scoped lang="less">
  .ml-3 {
    margin-left: 6rpx;
  }
  .mt-7 {
    margin-top: 14rpx;
  }
  .mt-7-5 {
    margin-top: 15rpx;
  }
  .mt-4-5 {
    margin-top: 9rpx;
  }
  .ml-4-5 {
    margin-left: 9rpx;
  }
  .page {
    padding-bottom: 628rpx;
    background-color: #f8f8f6;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .group {
      overflow-y: auto;
      .group_2 {
        padding-bottom: 50rpx;
        .group_3 {
          padding-bottom: 105rpx;
          height: 621rpx;
          .section {
            padding: 9rpx 12rpx 264rpx 13rpx;
            background-image: url('https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/bg.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .pos {
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              .image_3 {
                width: 67rpx;
                height: 11rpx;
              }
              .text {
                margin-left: 5rpx;
                color: #ffffff;
                font-size: 20rpx;
                font-family: PingFang;
                line-height: 16rpx;
              }
              .image {
                margin-left: 20rpx;
                width: 27rpx;
                height: 19rpx;
              }
            }
            .group_4 {
              line-height: 19rpx;
              .text_3 {
                line-height: 13rpx;
              }
            }
            .pos_2 {
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              .text_2 {
                line-height: 20rpx;
              }
              .image_2 {
                width: 49rpx;
                height: 19rpx;
              }
            }
            .font {
              font-size: 24rpx;
              font-family: Adobe Heiti Std;
              line-height: 19rpx;
              color: #ffffff;
            }
            .search {
				margin: 18rpx 40rpx 0 38rpx;
				padding: 6rpx 18rpx 6rpx 45rpx; /* 左侧填充增加，为图标留出空间 */
				height: 70rpx;
				background-color: #ffffff;
				border-radius: 19rpx;
				border: solid 1rpx #b9b9b9;
				background-image: url('/static/images/index/be9b1c58690cd406c88e81f267a5e7e1.png');
				background-size: 19rpx 24rpx;
				background-repeat: no-repeat;
				background-position: 18rpx center; /* 调整图标位置 */
				.search-input {
				  flex-grow: 1;
				  border: none;
				  outline: none;
				  background: transparent;
				  color: #999999;
				  line-height: 20rpx;
				  font-size: /* 您的字体大小 */;
				}
              .search-icon {
                width: 19rpx;
                height: 24rpx;
              }
              .text_4 {
                color: #999999;
                line-height: 20rpx;
              }
            }
            .search-history {
              margin-top: 29rpx;
              padding: 0 45rpx;
              .text-wrapper {
                padding: 5rpx 0;
                background-color: #ffffff26;
                border-radius: 14.5rpx;
                width: 63rpx;
                height: 29rpx;
              }
              .button {
                padding: 5rpx 0;
                background-color: #ffffff26;
                border-radius: 14.5rpx;
                width: 79rpx;
                height: 29rpx;
              }
            }
            .search-text {
              font-size: 20rpx;
              font-family: SourceHanSansCN;
              line-height: 19rpx;
              color: #ffffff;
            }
          }
          .section_3 {
            margin: -192rpx 29rpx 0 31rpx;
            padding: 65rpx 40rpx 17rpx;
            filter: drop-shadow(0rpx 3rpx 32rpx #00000033);
            border-radius: 30rpx;
            background-image: url('https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/flower.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .text_5 {
              margin-left: 14rpx;
              color: #ffffff;
              font-size: 50rpx;
              font-family: SourceHanSansCN;
              line-height: 38rpx;
              letter-spacing: 11rpx;
            }
            .font_2 {
              font-size: 26rpx;
              font-family: SourceHanSansCN;
              line-height: 25rpx;
              color: #ffffff;
            }
            .text_6 {
              margin-left: 10rpx;
              margin-top: 27rpx;
            }
            .text_7 {
              margin-left: 8rpx;
              margin-top: 16rpx;
              color: #ffffff;
              font-size: 14rpx;
              font-family: SourceHanSansCN;
              line-height: 15rpx;
            }
            .button_2 {
              margin-left: 65rpx;
              margin-top: 19rpx;
            }
            .text-wrapper_2 {
              padding: 6rpx 0 5rpx;
              border-radius: 20rpx;
              width: 155rpx;
              border-left: solid 2rpx #ffffff;
              border-right: solid 2rpx #ffffff;
              border-top: solid 2rpx #ffffff;
              border-bottom: solid 2rpx #ffffff;
            }
            .image_8 {
              margin-top: 22rpx;
              width: 70rpx;
              height: 14rpx;
            }
          }
        }
        .sort {
          padding: 10rpx 0 11rpx;
          width: 144rpx;
          .text_9 {
            line-height: 24rpx;
          }
          .text_8 {
            line-height: 24rpx;
          }
        }
        .pos_6 {
          position: absolute;
          right: 160rpx;
          top: 534rpx;
        }
        .pos_5 {
          position: absolute;
          left: 50%;
          top: 534rpx;
          transform: translateX(-50%);
        }
        .pos_4 {
          position: absolute;
          left: 158rpx;
          top: 534rpx;
        }
        .pos_3 {
          position: absolute;
          left: 14rpx;
          top: 534rpx;
        }
        .group_1 {
          padding: 10rpx 0;
          width: 144rpx;
        }
        .pos_7 {
          position: absolute;
          right: 16rpx;
          top: 534rpx;
        }
        .image_9 {
          width: 77rpx;
          height: 77rpx;
        }
        .font_4 {
          font-size: 26rpx;
          font-family: PingFang;
          line-height: 25rpx;
          color: #333333;
        }
      }
      .group_9 {
        margin-left: 31rpx;
        margin-right: 29rpx;
        padding-bottom: 19rpx;
        .section_4 {
          background-color: #1ac694;
          border-radius: 3.76rpx;
          width: 25rpx;
          height: 8rpx;
        }
        .section_5 {
          background-color: #cfcfcf;
          border-radius: 3.76rpx;
          width: 25rpx;
          height: 8rpx;
        }
      }
    }
  }
</style>
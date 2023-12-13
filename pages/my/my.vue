<template>
  <view class="flex-col page">
    <view class="flex-col flex-1 group">
      <view class="flex-col section">
        <view class="flex-col profile_header">
          <view class="flex-row justify-between user_part">
            <view class="flex-row items-center">
              <image class="avatar" :src="userStore?.userinfo?.avatar" />
              <view class="flex-col items-start info">
                <text class="font nickname">{{userStore?.userinfo?.nickname}}</text>
                <text class="mt-6 sign text_4"> {{userStore?.userinfo?.sign}} </text>
              </view>
            </view>
            <view class="flex-row button qian">
              <image class="shrink-0 image_3" src="/static/center/4f3b27ac9eb2690738cfca1219448f3d.png" />
              <text class="text_3 ml-4-5">签到</text>
            </view>
          </view>
          <view class="flex-row count">
            <view class="flex-col items-center group_3 equal-division-item">
              <text class="sign">0/10</text>
              <text class="font_3 text_1 mt-5-5">刷题</text>
            </view>
            <view class="flex-col items-center group_3 equal-division-item ml-9">
              <text class="sign">0/10</text>
              <text class="font_3 mt-5">点赞</text>
            </view>
            <view class="flex-col items-center group_3 equal-division-item ml-9">
              <text class="sign">0/10</text>
              <text class="font_3 mt-5">评论</text>
            </view>
            <view class="flex-col items-center group_3 equal-division-item ml-9">
              <text class="sign">0/10</text>
              <text class="font_3 mt-5">分享</text>
            </view>
          </view>
        </view>
      </view>
      <view class="flex-col common_list">
        <view class="flex-row justify-between items-center group_14" @click="toSetting">
          <view class="flex-row" >
            <image class="shrink-0 image_4" src="/static/center/50a03cbb6c9ab38b6eb72246a388093f.png" />
            <text class="ml-8 font_4 text_5">个人中心</text>
          </view>
          <image class="image_5" src="/static/center/cacf793277371a34dc9bad30a903649e.png" />
        </view>
        <view class="flex-col">
          <view class="flex-row justify-between items-center group_5">
            <view class="flex-row">
              <image class="shrink-0 image_6" src="/static/center/52ee949d28836ea17704774eb29aef96.png" />
              <text class="font_4 text_6 ml-10-5">推荐好友</text>
            </view>
            <image class="image_5" src="/static/center/cacf793277371a34dc9bad30a903649e.png" />
          </view>
          <view class="flex-row justify-between items-center group_15">
            <view class="flex-row items-center">
              <image class="shrink-0 image_7" src="/static/center/62db8fc4b354ec91b8ae15b7ff29d5dc.png" />
              <text class="font_4 text_7 ml-10-5">意见反馈</text>
            </view>
            <image class="image_5" src="/static/center/cacf793277371a34dc9bad30a903649e.png" />
          </view>
        </view>
      </view>
      <view class="flex-col common_list">
		  <!-- 我的收藏 -->
        <view class="flex-row justify-between items-center group_4">
          <view class="flex-row">
            <image class="shrink-0 image_8" src="/static/center/d7838d33dff0f7ffd1295eb48bcae068.png" />
            <text class="font_4 ml-10-5">我的收藏</text>
          </view>
          <image class="image_5" src="/static/center/cacf793277371a34dc9bad30a903649e.png" />
        </view>
		<!-- 退出登录 -->
		<view @click="logout" class="flex-row justify-between items-center group_4">
		  <view class="flex-row">
		    <image class="shrink-0 image_8" src="/static/center/d7838d33dff0f7ffd1295eb48bcae068.png" />
		    <text class="font_4 ml-10-5">退出登录</text>
		  </view>
		  <image class="image_5" src="/static/center/cacf793277371a34dc9bad30a903649e.png" />
		</view>
      </view>
    </view>
   
  </view>
</template>


<script setup>
import { useUserStore } from '../../src/store/user';
	const userStore = useUserStore()
	const items = []
	
	const logout = ()=>{
		uni.showModal({
			title:'确定退出?',
			success: function (res) {
					if (res.confirm) {
						console.log('用户点击确定');
						userStore.clearUserinfo()
						uni.redirectTo({
							url:'/pages/login/login'
						})
					} else if (res.cancel) {
					}
				}
		})
	}
	const toSetting = ()=>{
		uni.navigateTo({
			url:'/pages/my/settings/index'
		})
	}
	
</script>

<style scoped lang="less">
  .ml-4-5 {
    margin-left: 9rpx;
  }
  .mt-5-5 {
    margin-top: 11rpx;
  }
  .ml-9 {
    margin-left: 18rpx;
  }
  .mt-5 {
    margin-top: 10rpx;
  }
  .ml-10-5 {
    margin-left: 21rpx;
  }
  .page {
    background-color: #f2f2f2;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .group {
      padding-bottom: 25rpx;
      overflow-y: auto;
      .section {
        padding: 35rpx 0 11rpx;
        background-image: url('https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-color: #ffffff;
        .image {
          width: 660rpx;
          height: 24rpx;
        }
        .font {
          font-size: 36rpx;
          font-family: SourceHanSansCN;
          line-height: 34rpx;
          color: #ffffff;
        }
        .text {
          font-weight: 700;
        }
        .profile_header {
          margin-top: 49rpx;
          .user_part {
            padding-left: 31rpx;
            .avatar {
              width: 119rpx;
              height: 119rpx;
			  border-radius: 50%;
            }
            .info {
              margin-left: 31rpx;
              .nickname {
                font-weight: 500;
              }
              .text_4 {
                font-weight: 300;
                line-height: 23rpx;
              }
            }
            .button {
              align-self: flex-start;
              margin-top: 47rpx;
              .image_3 {
                width: 23rpx;
                height: 23rpx;
              }
              .text_3 {
                color: #ffffff;
                font-size: 26rpx;
                font-family: SourceHanSansCN;
                line-height: 25rpx;
              }
            }
            .qian {
              padding: 13rpx 16rpx 12rpx 19rpx;
              background-color: #f57d31;
              box-shadow: 0rpx 0rpx 6rpx #0054ff5c;
              border-radius: 8rpx 0rpx 0rpx 8rpx;
              height: 50rpx;
            }
          }
          .count {
            margin-top: 35rpx;
            .group_3 {
              flex: 1 1 174rpx;
              .font_3 {
                font-size: 28rpx;
                font-family: SourceHanSansCN;
                line-height: 27rpx;
                color: #ffffff;
              }
              .text_1 {
                line-height: 26rpx;
              }
            }
            .equal-division-item {
              padding: 10rpx 0;
            }
          }
          .sign {
            font-size: 24rpx;
            font-family: SourceHanSansCN;
            line-height: 24rpx;
            font-weight: 500;
            color: #ffffff;
          }
        }
      }
      .common_list {
        padding: 0 30rpx;
        background-color: #ffffff;
        .group_14 {
          padding: 40rpx 0 42rpx;
          border-bottom: solid 1rpx #dcdcdc;
          .image_4 {
            width: 33rpx;
            height: 32rpx;
          }
          .text_5 {
            line-height: 30rpx;
          }
        }
        .group_5 {
          padding: 39rpx 0 38rpx;
          border-bottom: solid 1rpx #dcdcdc;
          .image_6 {
            width: 32rpx;
            height: 32rpx;
          }
          .text_6 {
            line-height: 30rpx;
          }
        }
        .font_4 {
          font-size: 32rpx;
          font-family: SourceHanSansCN;
          line-height: 31rpx;
          color: #333333;
        }
        .image_5 {
          width: 12rpx;
          height: 22rpx;
        }
        .group_15 {
          padding: 41rpx 0 39rpx;
          .image_7 {
            width: 32rpx;
            height: 25rpx;
          }
          .text_7 {
            line-height: 30rpx;
          }
        }
        .group_4 {
          padding: 40rpx 0 41rpx;
          border-bottom: solid 1rpx #dcdcdc;
          .image_8 {
            width: 31rpx;
            height: 31rpx;
          }
		  // &:active{
			 //  background: #f1f2f3;
		  // }
        }
      }
    }
   
  }
</style>
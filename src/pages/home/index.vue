<template>
  <div class="">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <message-item v-for="(item, index) in messageList" :key="index" :userInfo="item"></message-item>
    <message-item></message-item>
    <message-item></message-item>
    <message-item></message-item>
    <message-item></message-item>
    <message-item></message-item>
    <message-item></message-item>
    <message-item></message-item>
    <message-item></message-item>
    <message-item></message-item>
    <message-item></message-item>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import messageItem from './commponents/messageItem.vue'

const messageList = reactive([
  {
    userId: 1,
    name: '关谷神奇',
    avatar: 'https://piccn.ihuaben.com/pic/community/201904/0-1554091041451-545o_533-535.jpeg?x-oss-process=image/resize,w_640',
  },
  {
    userId: 2,
    name: '唐悠悠',
    avatar: 'https://inews.gtimg.com/newsapp_bt/0/12059842365/1000',
  },
  {
    userId: 3,
    name: '陈美嘉',
    avatar: 'https://n.sinaimg.cn/sinacn14/450/w500h750/20180724/e76b-hftenhz5940865.jpg',
  },
  {
    userId: 4,
    name: '吕子乔',
    avatar: 'https://www.jryxtg.com/wp-content/uploads/rBACFFM_xbailF2BAAIHRWVDW28337-e1557029457861.jpg',
  },
  {
    userId: 5,
    name: '胡一菲',
    avatar: 'https://p2.itc.cn/images01/20200620/e62f4b2efda54aefa50ca80b32067aa6.jpeg',
  },
  {
    userId: 6,
    name: '曾小贤',
    avatar: 'https://img.haote.com/upload/news/20180704/153070897768411.jpg',
  },
])

let value = ref('')

watch(
  value,
  (cur) => {
    console.log(cur);
  }
)



</script>

<style lang="less">

</style>
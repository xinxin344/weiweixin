<template>
  <div class="">
    <van-button type="primary">首页</van-button>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div>111</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

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
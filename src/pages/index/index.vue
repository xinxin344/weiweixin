<template>
  <div class="box">
    <router-view></router-view>
    <Tabar/>
  </div>
</template>

<script lang="ts" setup>
import { globalStore } from '@/store/modules/global'
import { storeToRefs } from 'pinia'
import Tabar from '../../components/tabar.vue'

console.log(111222);

const { user } = storeToRefs(globalStore())
const { changeUser } = globalStore()
console.log('user', user.value.id);
console.log('user', user.value.name);

changeUser('huang', 22)
console.log('user', user.value.id);
console.log('user', user.value.name);
</script>

<style lang="less">
.box{
  &-title{
    font-size: 34px;
  }
}
</style>
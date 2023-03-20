<template>
  <div>my122+++</div>
</template>

<script lang="ts" setup>
import { globalStore } from '@/store/modules/global'
import { storeToRefs } from 'pinia'

console.log(111222);

const { user } = storeToRefs(globalStore())
console.log('user', user.value.id);
console.log('user', user.value.name);
</script>

<style>

</style>
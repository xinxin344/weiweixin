<template>
  <!-- <div class="flex">
    <img class="w-20px h-20px mr-5px"/>
    <div class="">
      <div class="">相亲相爱一家人</div>
      <div></div>
    </div>
  </div> -->
  <div class="item">
    <div class="touxiang">
      <img :src="props.userInfo?.avatar" alt="">
    </div>
    <div class="content" @click="toChat">
      <div class="content-message">
        <div class="content-message__title">{{ props.userInfo?.name }}</div>
        <div class="content-message__preview">晚上回家吃饭吗？</div>
      </div>
      <div class="content-right">
        <div class="content-right__date">12:25</div>
        <div class="content-right__img"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, watch, defineProps, PropType } from 'vue'

interface UserInfo {
  name: string,
  userId: number,
  avatar: string,
}

const router = useRouter()
const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    require: false,
  }
})
console.log('userInfo', props.userInfo);


const a = ref(1)

const toChat = () => {
  sessionStorage.setItem('userInfo', JSON.stringify(props.userInfo))
  router.push({
    name: 'chat',
    // params: {
    //   userInfo: props.userInfo
    // }
  })
}


</script>

<style lang="less" scoped>
.item {
  display: flex;
  height: 85px;
  padding: 12.5px 10px;
  .touxiang {
    margin-right: 10px;
    img {
      width: 60px;
      height: 60px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #ccc;
    &-message {
      &__title {
        font-size: 20px;
        font-weight: bold;
      }

      &__preview {
        font-size: 12px;
        color: #ccc;
      }
    }

    &-right {
      &__date {
        font-size: 12px;
        color: #ccc;
      }

      &__img {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
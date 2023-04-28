<template>
  <!-- <div class="box">
    <div class="box-item" @click="itemClick('home')">
      <img class="box-item__icon" src="@/assets/首页.svg" alt=""/>
      <div class="box-item__text">首页</div>
    </div>
    <div class="box-item" @click="itemClick('MailLIst')">
      <img class="box-item__icon" src="@/assets/通讯录.svg" alt=""/>
      <div class="box-item__text">通讯</div>
    </div>
    <div class="box-item">
      <img class="box-item__icon" src="@/assets/首页.svg" alt=""/>
      <div class="box-item__text">发现</div>
    </div>
    <div class="box-item">
      <img class="box-item__icon" src="@/assets/首页.svg" alt=""/>
      <div class="box-item__text">我的</div>
    </div>
  </div> -->
  <van-tabbar v-model="active" route>
    <van-tabbar-item name="home" to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" to="/MailLIst" icon="search">通讯</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o">发现</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'

const active = ref('home');

const router = useRouter()

const tabarItem = reactive([
  {
    name: 'home',
    iconSrc: '',
    text: '',
  }
])

const itemClick = (name: string) => {
  router.push({
    name,
  })
}
</script>

<style lang="less" scoped>
.box{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f9f9f9;
  height: 80px;
  .box-item{
    display: flex;
    flex-direction: column;

    &__icon{
      width: 20px;
      height: 20px;
      transform: translateX(5px);
    }
  }
}
</style>
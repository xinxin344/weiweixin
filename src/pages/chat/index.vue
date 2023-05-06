<template>
  <div class="chat-box">
    <div v-for="(message, index) in messages" :key="index" :class="{'chat-message': true, 'self': message.self}">
      <img class="avatar" :src="message.avatar" alt="Avatar">
      <div class="message-content">{{ message.content }}</div>
      <span v-if="!message.self">{{ message.userId }}</span>
    </div>
  </div>
  <div class="input-box">
    <input v-model="newMessage" type="text" @keydown.enter="sendMessage">
    <button @click="sendMessage">发送</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
// import { v4 as uuid } from 'uuid';
const router = useRoute()
const newMessage = ref('');
const userId = router.query.userId
const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{}')

console.log('userInfo', userInfo);

const messages = reactive(
  [
    // {
    //   self: false,
    //   avatar: 'https://placeimg.com/50/50/people',
    //   content: '你好！',
    //   userId: '',
    // },
    // {
    //   self: true,
    //   avatar: 'https://placeimg.com/50/50/animals',
    //   content: '你好，很高兴见到你！'
    // },
    // {
    //   self: false,
    //   avatar: 'https://placeimg.com/50/50/people',
    //   content: '这是一个聊天消息示例。'
    // },
    // {
    //   self: true,
    //   avatar: 'https://placeimg.com/50/50/animals',
    //   content: '是的，我明白了。'
    // }
  ]
)

const ws = new WebSocket('ws://localhost:8000')

onMounted(() => {
  ws.addEventListener('open',handleOpen,false);
  ws.addEventListener('close',handleClose,false);
  ws.addEventListener('error',handleError,false);
  ws.addEventListener('message',handleMessage,false);
})

const handleOpen = () => {
  console.log('WebSocket open');
}

const handleClose = () => {
  console.log('WebSocket close');
}

const handleError = () => {
  console.log('WebSocket error');
}

const handleMessage = (e) => {
  console.log('WebSocket message');
  console.log(e);
  const blob = e.data
  blob.text().then(text => {
    console.log('buffer', text);
    const message = JSON.parse(text)
    console.log('message', message);
    
    if (userId === message.userId) {
      message.self = true;
    }
    // message.self = false;
    messages.push(message)
  })
}

const sendMessage = () => {
  if (newMessage.value.trim() === '') return
  const message = {
    self: false,
    avatar: 'https://placeimg.com/50/50/animals',
    content: newMessage.value,
    userId,
  }
  ws.send(JSON.stringify(message))
  // messages.push(message)
  newMessage.value = ''
}
</script>

<style lang="less">
// 定义主题颜色
@primary-color: #07c160;

// 定义聊天框和输入框的样式
.chat-box {
  width: 100%;
  height: 450px;
  overflow-y: scroll;
  padding: 10px;

  .chat-message {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;

    &.self {
      justify-content: flex-end;

      .message-content {
        background-color: @primary-color;
        color: #fff;
      }
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .message-content {
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      color: #333;
      max-width: 60%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    }
  }
}

.input-box {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  input[type="text"] {
    width: 80%;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    outline: none;
    background-color: #f8f8f8;

    &:focus {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2);
    }
  }

  button {
    width: 60px;
    height: 60px;
    margin-left: 10px;
    border: none;
    border-radius: 50%;
    background-color: @primary-color;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: darken(@primary-color, 5%);
      outline: none;
    }
  }
}
</style>

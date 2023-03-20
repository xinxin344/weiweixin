import { defineStore } from 'pinia'
import { reactive } from 'vue';

interface User {
  name: string;
  id: number;
}

export const globalStore = defineStore('globalStore', () => {
  const user: User = reactive({
    name: '',
    id: 0,
  })

  function changeUser(name: string, id: number) {
    user.name = name
    user.id = id
  }

  return { user, changeUser }
})
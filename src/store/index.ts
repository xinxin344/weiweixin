import { createPinia } from 'pinia'

const store = createPinia()
  .use(({store}) => {
    const initialState = JSON.parse(JSON.stringify(store.$state))
    store.$reset = () => {
      store.$state = JSON.parse(JSON.stringify(initialState))
    }
  })

export default store

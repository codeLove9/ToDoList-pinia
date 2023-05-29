import { defineStore } from 'pinia'

export const useListDataStore = defineStore('listData', {
  state: (): {
    listData: {
      id: number
      todo: string
      checked: boolean
    }[]
  } => {
    return {
      listData: [
        { id: 1, todo: '学习pinia', checked: true },
        { id: 2, todo: '学习uniapp', checked: true },
        { id: 3, todo: '学习Java', checked: false },
        { id: 4, todo: '学习react', checked: true },
        { id: 5, todo: '学习three.js', checked: false }
      ]
    }
  },
  actions: {
    changeStatus(id: number) {
      this.listData = this.listData.map(item => {
        item.id === id ? (item.checked = !item.checked) : ''
        return item
      })
    }
  },
  getters: {
    total(state) {
      return state.listData.length
    },
    todo(state) {
      return state.listData.filter((item: { id: number; todo: string; checked: boolean }) => item.checked === false).length
    },
    finished() {
      // 强转解决类型报错
      return Number(this.total) - Number(this.todo)
      // or    this.total as number - (this.todo as number))    后半段需要打括号
    }
  }
})

/* export const useListDataStore = defineStore('listData', () => {
  const state: {
    listData: {
      id: number
      todo: string
      checked: boolean
    }[]
  } = reactive({
    listData: [
      { id: 1, todo: '学习pinia', checked: true },
      { id: 2, todo: '学习uniapp', checked: true },
      { id: 3, todo: '学习Java', checked: false },
      { id: 4, todo: '学习react', checked: true },
      { id: 5, todo: '学习three.js', checked: false }
    ]
  })

  let { listData } = toRefs(state)

  const changeStatus = (id: number) => {
    listData.value = listData.value.map((item: { id: number; todo: string; checked: boolean }) => {
      item.id === id ? (item.checked = !item.checked) : ''
      return item
    })
  }

  return {
    listData,
    changeStatus
  }
}) */

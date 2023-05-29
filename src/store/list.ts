import { defineStore } from 'pinia'

export const useListDataStore = defineStore('listData', {
  state: (): {
    listData: List
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
    },
    addList(val: listItemItf) {
      this.listData.unshift(val)
    },
    deleteList(id: number) {
      this.listData = this.listData.filter(item => item.id !== id)
    }
  },
  getters: {
    total(state) {
      return state.listData.length
    },
    todo(state) {
      return state.listData.filter((item: listItemItf) => item.checked === false).length
    },
    finished() {
      // 强转解决类型报错
      return Number(this.total) - Number(this.todo)
      // or    this.total as number - (this.todo as number))    后半段需要打括号
    }
  }
})

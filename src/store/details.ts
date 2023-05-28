import { defineStore } from 'pinia'
import { useListDataStore } from './list'

export const useDetailsDataStore = defineStore('detailsData', {
  getters: {
    total(): number {
      const { listData } = useListDataStore()
      return listData.length
    },
    todo(): number {
      const { listData } = useListDataStore()
      let count = 0
      listData.forEach((item: { id: number; todo: string; checked: boolean }) => {
        item.checked === false ? count++ : ''
      })
      return count
    },
    finished() {
      // 强转解决类型报错
      return Number(this.total) - Number(this.todo)
      // or    this.total as number - (this.todo as number))    后半段需要打括号
    }
  }
})

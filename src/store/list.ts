import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

export const useListDataStore = defineStore('listData', () => {
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

  const { listData } = toRefs(state)

  const changeStatus = (id: number) => {
    listData.value.map((item: { id: number; todo: string; checked: boolean }) => {
      item.id === id ? (item.checked = !item.checked) : ''
      return item
    })
  }
  return {
    listData,
    changeStatus
  }
})

<template>
  <div class="list-item">
    <div class="left">
      <input type="checkbox" class="checkbox" :checked="checked" @click="changeStatus(id)" />
    </div>
    <div class="center">{{ props.listItem }}</div>
    <div class="right">
      <button class="delete" @click="deleteList(id)">删除</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useListDataStore } from '../../store/list'

const props = defineProps({
  id: { type: Number, required: true },
  listItem: { type: String, required: true },
  checked: { type: Boolean, required: true }
})

const listDataStore = useListDataStore()

const changeStatus = (id: number) => {
  listDataStore.changeStatus(id)
}

const deleteList = (id: number) => {
  listDataStore.deleteList(id)
}
</script>

<style lang="less" scoped>
.list-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 30px;
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
}

.list-item:first-child {
  margin-top: 30px;
}
.left {
  width: 60px;
  height: 51px;
}
.checkbox {
  width: 33px;
  height: 51px;
  margin-left: 10px;
}

.center {
  height: 35px;
  margin-right: 10px;
  line-height: 35px;
  font-size: 20px;
}

.delete {
  position: absolute;
  right: 10px;
  top: 4px;
  width: 40px;
  height: 40px;
  background-color: rgb(209, 57, 11);
}
</style>

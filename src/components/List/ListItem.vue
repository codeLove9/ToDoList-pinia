<template>
  <div class="list-item">
    <div class="left">
      <input type="checkbox" class="checkbox" :checked="checked" @click="changeStatus(id)" />
    </div>
    <div class="right">{{ props.listItem }}</div>
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
</script>

<style lang="less" scoped>
.list-item {
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

.right {
  height: 35px;
  margin-right: 10px;
  line-height: 35px;
  font-size: 20px;
}
</style>

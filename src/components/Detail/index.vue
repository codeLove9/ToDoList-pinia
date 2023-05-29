<template>
  <div class="detail">
    <div class="item">todo：{{ listDataStore.todo }}</div>
    <div class="item">finished：{{ listDataStore.finished }}</div>
    <div class="item">total：{{ listDataStore.total }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useListDataStore } from '../../store/list'
const listDataStore = useListDataStore()
</script>

<style lang="less" scoped>
.detail {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  height: 100px;
  margin-top: 30px;
}

.item {
  width: 139px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 20px;
  background: rgb(251, 148, 63);
  background: radial-gradient(circle, rgba(251, 148, 63, 1) 0%, rgba(70, 252, 229, 1) 100%);
}
</style>

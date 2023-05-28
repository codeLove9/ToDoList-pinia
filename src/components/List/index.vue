<template>
  <div class="list">
    <ListItem v-for="item in listData" :key="item.id" :id="item.id" :listItem="item.todo" :checked="item.checked"></ListItem>
  </div>
</template>

<script lang="ts" setup>
import ListItem from './ListItem.vue'
import { useListDataStore } from '../../store/list'

const listDataStore = useListDataStore()
const listData = listDataStore.listData
</script>

<style lang="less" scoped>
.list {
  width: 1000px;
  margin-top: 50px;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
</style>

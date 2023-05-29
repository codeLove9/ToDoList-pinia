<template>
  <div class="list">
    <!-- 要么直接listDataStore.listData， 要么在computed中映射 -->
    <ListItem v-for="item in list" :key="item.id" :id="item.id" :listItem="item.todo" :checked="item.checked"></ListItem>
  </div>
</template>

<script lang="ts" setup>
import ListItem from './ListItem.vue'
import { useListDataStore } from '../../store/list'
import { computed } from 'vue'

const listDataStore = useListDataStore()

// 直接取会导致点击删除了数据变了，界面不变。因为变得是store里的listData而不是组件里的list
// const list = listDataStore.listData

const list = computed<List>(() => listDataStore.listData)
</script>

<style lang="less" scoped>
.list {
  width: 1000px;
  margin-top: 50px;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
</style>

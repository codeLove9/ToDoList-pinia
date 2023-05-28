<template>
  <div class="todo-list">
    <Input />
    <List />
    <Detail />
  </div>
</template>

<script lang="ts" setup>
import Input from './Input/index.vue'
import List from './List/index.vue'
import Detail from './Detail/index.vue'
</script>

<style lang="less">
.todo-list {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 30%;
  justify-content: center;
  align-items: center;
}
</style>

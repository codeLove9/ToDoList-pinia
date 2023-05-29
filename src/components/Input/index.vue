<template>
  <div class="header">
    <input type="text" :placeholder="placeholderText" v-model="inputText" @focus="focus" @blur="blur" />
    <button style="width: 35px; height: 35px; margin-left: 20px" @click="addList">+</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { useListDataStore } from '../../store/list'

let placeholderText: Ref<string> = ref('请输入待完成的事')

let inputText: Ref<string> = ref('')

const listDataStore = useListDataStore()

const focus = () => {
  placeholderText.value = '正在输入'
}

const blur = () => {
  placeholderText.value = '请输入待完成的事'
}

const addList = () => {
  const value = {
    id: +new Date(),
    todo: inputText.value,
    checked: false
  }
  listDataStore.addList(value)
  inputText.value = ''
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  width: 350px;
}
input {
  width: 300px;
  height: 30px;
  padding-left: 5px;
}
input::placeholder {
  color: red;
}
</style>

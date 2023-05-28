<template>
  <div class="header">
    <input type="text" :placeholder="placeholderText" @focus="focus" @blur="blur" />
    <button style="width: 35px; height: 35px; margin-left: 20px">+</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'

let placeholderText: Ref<string> = ref('请输入待完成的事')

const focus = () => {
  placeholderText.value = '正在输入'
}

const blur = () => {
  placeholderText.value = '请输入待完成的事'
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

<template>
  <div class="detail">
    <div class="item">todo：3</div>
    <div class="item">finished：5</div>
    <div class="item">total：8</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
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

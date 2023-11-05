<script setup lang="ts">
import { ref } from 'vue';

const message = ref(null); // リアクティブな値を定義
fetch('api/message')
  .then(response => response.json()) // レスポンスをJSONとして解析
  .then(data => message.value = data.text); // データのtextプロパティをmessageに設定
</script>

<template>
  <div>{{ message }}</div> <!-- messageを表示 -->
</template>
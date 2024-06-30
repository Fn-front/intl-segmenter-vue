<script lang="ts" setup>
const props = defineProps({
  inputData: String
})
</script>

<template>
  <br>
  <p>NormalCode</p>
  <p>入力データ：{{ props.inputData }}</p>
  <p>文字数カウント：{{ props.inputData?.length }}</p>
</template>
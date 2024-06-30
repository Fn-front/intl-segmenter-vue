<script setup lang="ts">
import { computed, ref } from 'vue';
import Segmenter from "@/components/Segmenter.vue";
import CodeUnit from "@/components/CodeUnit.vue";
import NormalCode from "@/components/NormalCode.vue";

let inputText = ref('');

</script>

<template>
  <input type="text" name="" id="" v-model="inputText">
  <CodeUnit :inputData="inputText" />
  <Segmenter :inputData="inputText" />
  <NormalCode  :inputData="inputText" />
</template>
<script lang="ts" setup>
import { watch, ref, toRefs } from "@vue/runtime-core";

const props = defineProps({
  inputData: String
});

const length = ref(0);
const segmenter = new Intl.Segmenter("ja", {granularity: "grapheme"});


const { inputData } = toRefs(props);
watch(inputData, () => {
  const respone: Array<any> = props.inputData;
  const segments = segmenter.segment(respone);
  length.value = [...segments].length;
})

</script>

<template>
  <br>
  <p>Intl.Segmenter</p>
  <p>入力データ：{{ props.inputData }}</p>
  <p>文字数カウント：{{ length }}</p>
</template>

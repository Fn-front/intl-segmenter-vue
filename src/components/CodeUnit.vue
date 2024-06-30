<script lang="ts" setup>
import { watch, reactive, toRefs } from "@vue/runtime-core";

const props = defineProps({
  inputData: String
})

const state = reactive( {
  editData: <string[]>[],
})


const { inputData } = toRefs(props);
watch(inputData, () => {
  const respone: Array<any> = props.inputData;
  const result:any = charCode(respone);
  state.editData.push(result);
})

const charCode = (res: any) => {
  let result = [];
  for (let i = 0; i < res.length; i++) {
    result.push('0x'+res[i].charCodeAt(0).toString(16));
  }
  return result;
}

</script>

<template>
  <br><br>
  <p>コードユニット</p>
  <p>入力データ：{{ state.editData }}</p>
</template>

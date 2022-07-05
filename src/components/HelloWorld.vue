<script setup lang="ts">
import { useMainStore } from '../store';
import { storeToRefs } from 'pinia';
const store = useMainStore()
const {count, foo, arr} = storeToRefs(store)
const handleChangeData = () => {
  // store.count++
  // store.$patch({
  //   count: store.count + 1,
  //   foo: 'hello'
  // })
  // store.$patch(state => {
  //   state.count++
  //   state.foo = 'hello'
  //   state.arr.push(4)
  // })
  store.changeState(100)
}
</script>
<template>
  <h3>{{count}}</h3>
  <h3>{{foo}}</h3>
  <h3>{{arr}}</h3>
  <button @click="handleChangeData">修改数据</button>
</template>
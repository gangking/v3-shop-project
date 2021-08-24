<template>
  <h1>home</h1>
  <p>{{ $store.state.foo }}</p>
  <p>{{ store.state.count }}</p>
  <p>{{ $store.state.count }}</p>
</template>

<script lang="ts" setup>
// import { useStore } from 'vuex'
import { useStore } from '../../store'
const store = useStore()
console.log(store.state.foo)
</script>

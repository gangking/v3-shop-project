<template>
  <h1>
    hello word
  </h1>
  <abc />
  <Foo msg="hello" />
</template>

<script lang="tsx" setup>
import Foo from './foo'
const abc = <h1>abc</h1>
</script>

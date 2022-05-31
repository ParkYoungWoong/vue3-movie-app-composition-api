<script setup lang="ts">
import { watch, toRef, toRefs } from 'vue'

const $props = defineProps({
  name: {
    type: String,
    required: true
  },
  suffix: {
    type: String,
    default: '...'
  }
})
const $emit = defineEmits(['rename'])

const { name } = toRefs($props)
const suffix = toRef($props, 'suffix')

watch(
  () => name,
  newValue => console.log('Changed $props.name:', newValue)
)

function rename() {
  $emit('rename', 'YoungWoong')
}
</script>

<template>
  <h3>My name is {{ name }}{{ suffix }}</h3>
  <!-- <button @click="$emit('rename', 'YoungWoong')"> -->
  <button @click="rename">
    Rename!
  </button>
</template>

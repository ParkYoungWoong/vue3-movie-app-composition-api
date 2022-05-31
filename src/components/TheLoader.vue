<template>
  <div
    v-show="loading"
    v-cloak
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${width}px`,
      borderColor: color
    }"
    :class="{
      absolute,
      fixed
    }"
    class="loader"></div>
</template>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 30
  },
  width: {
    type: Number,
    default: 4
  },
  color: {
    type: String,
    default: ''
  },
  absolute: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.loader {
  flex-shrink: 0;
  border-style: solid;
  border-radius: 50%;
  border-color: yellow;
  border-top-color: rgba(black,.1) !important;
  box-sizing: border-box;
  animation: spin .8s linear infinite;
  position: relative;
  &.absolute {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &.fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
[v-cloak] {
  display: none;
}
</style>

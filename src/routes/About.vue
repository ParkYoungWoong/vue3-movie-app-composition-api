<script setup lang="ts">
import { ref } from 'vue'
import MyName from '~/components/MyName.vue'

const name = ref('HEROPY')
</script>

<template>
  <h1>About!</h1>
  <MyName
    :name="name"
    @rename="name = $event" />
</template>

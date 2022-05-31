<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useLoadImage } from '~/plugins/loadImage'
import { useMovieStore } from '~/store/movie'
import TheLoader from '~/components/TheLoader.vue'

const $route = useRoute()
const $loadImage = useLoadImage()
const movieStore = useMovieStore()

const imageLoading = ref(true)
const movie = reactive({
  title: '',
  poster: ''
})

;(async function init() {
  await movieStore.readMovieDetails(($route.params.id as string))
  movie.title = (movieStore.movie.Title as string)
  movie.poster = (movieStore.movie.Poster as string).replace('SX300', 'SX700')
  await $loadImage(movie.poster)
  imageLoading.value = false
})()
</script>

<template>
  <h1>Movie!</h1>
  <h2>{{ movie.title }}</h2>
  <div
    :style="{ backgroundImage: `url(${movie.poster})` }"
    class="poster">
    <TheLoader
      :loading="imageLoading"
      absolute />
  </div>
</template>

<style scoped lang="scss">
.poster {
  width: 400px;
  height: calc(400px * 3 / 2);
  margin-right: 70px;
  border-radius: 10px;
  background-color: lightgray;
  background-size: cover;
  background-position: center;
  position: relative;
  flex-shrink: 0;
}
</style>

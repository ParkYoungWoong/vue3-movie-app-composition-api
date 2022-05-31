<script setup lang="ts">
import { ref, watch, Ref, onMounted } from 'vue'
import { useMovieStore } from '~/store/movie'
import TheLoader from '~/components/TheLoader.vue'

// Movies
const movieStore = useMovieStore()
const movieEls: Ref<HTMLLIElement[]> = ref([])
const loading = ref(false)
watch(
  () => movieStore.title, // 일반 데이터는 콜백의 반환으로 구성!
  (newValue, oldValue) => console.log('movieStore.title watch:', newValue, oldValue)
)
watch(movieEls, () => { // Vue ref 객체는 인수로 바로 등록 가능!
  console.log('Wow!')
})
async function readMovies(event: MouseEvent|KeyboardEvent) {
  if ((event as KeyboardEvent).isComposing) return
  // console.log('readMovies!!')
  loading.value = true
  await movieStore.readMovies()
  console.log(movieEls.value)
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
onMounted(() => {
  console.log('mounted/movieStore:', movieStore)
})


// Title for page
const h1: Ref<HTMLHeadingElement|null> = ref(null)
console.log('created:', h1.value) // null
onMounted(() => {
  console.log('mounted/title', h1.value) // <h1>..
})
</script>

<template>
  <h1 ref="h1">
    Home!
  </h1>
  <input
    v-model="movieStore.title"
    @keydown.enter="readMovies" />
  <button @click="readMovies">
    SEARCH
  </button>
  <TheLoader
    :loading="loading"
    color="orange" />
  <ul>
    <li
      v-for="movie in movieStore.movies"
      ref="movieEls"
      :key="movie.imdbID">
      <RouterLink :to="`/movie/${movie.imdbID}`">
        {{ movie.Title }}
      </RouterLink>
    </li>
  </ul>
</template>

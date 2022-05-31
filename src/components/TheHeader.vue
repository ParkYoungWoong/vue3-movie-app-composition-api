<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const $route = useRoute()
const $router = useRouter()

const navigations = ref([
  {
    name: 'Search',
    href: '/'
  },
  {
    name: 'Movie',
    href: '/movie/tt4520988',
    path: /^\/movie/
  },
  {
    name: 'About(RouterLink)',
    href: '/about'
  }
])

function isMatch(path: ReturnType<typeof RegExp>|undefined) {
  if (!path) return false
  return path.test($route.fullPath)
}
function toAbout() {
  $router.push('/about')
}
</script>

<template>
  <header>
    <ul>
      <li
        v-for="nav in navigations"
        :key="nav.href">
        <RouterLink
          :to="nav.href"
          :class="{ active: isMatch(nav.path) }"
          active-class="active">
          {{ nav.name }}
        </RouterLink>
      </li>
      <li>
        <a
          href=""
          @click.prevent="toAbout">
          About(Method Binding)
        </a>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
.active {
  color: red;
  font-weight: bold;
}
</style>

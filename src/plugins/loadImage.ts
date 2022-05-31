import { App } from 'vue'

function $loadImage(src: string) {
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = src
    img.addEventListener('load', () => {
      setTimeout(() => {
        resolve(undefined)
      }, 2000)
    })
  })
}

export const useLoadImage = () => $loadImage
export default {
  install(app: App) {
    app.config.globalProperties.$loadImage = $loadImage
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $loadImage: (src: string) => Promise<undefined>
  }
}

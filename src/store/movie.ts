import { defineStore } from 'pinia'

export interface IMovie {
  imdbID: string
  Title: string
  Poster: string
}
export type IMovies = IMovie[]

export const useMovieStore = defineStore('movie', {
  state() {
    const movies: IMovies = []
    const movie: Partial<IMovie> = {}
    return {
      title: '',
      page: 1,
      movies,
      movie,
      loading: false
    }
  },
  actions: {
    async readMovies(isFirst?: boolean) {
      if (!this.title.trim()) return
      if (isFirst) {
        this.movies = []
      }

      const res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${this.title}&page=${this.page}`)
      const { Search } = await res.json()

      this.movies.push(...(Search as IMovies))
    },
    async readMovieDetails(id: string) {
      if (this.loading) return
      this.loading = true

      const res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&i=${id}`)
      const movie: IMovie = await res.json()

      this.movie = movie
      this.loading = false
    }
  }
})

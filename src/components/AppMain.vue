<script>
import { store } from "../data/store";
import AppCard from "./AppCard.vue";
export default {
    data() {
        return {
            store,

        }
    },
    components: { AppCard }

}

</script>

<template>
    <section class="movies-section" v-if="store.resultsType == 'movies'">
        <h1 v-if="store.movies.length > 0" class="mt-3 ms-5">Movies</h1>
        <div class="card-container">
            <AppCard v-for="movie in store.movies" :key="movie.id" :title="movie.title"
                :originalTitle="movie.original_title" :lang="movie.original_language" :vote="movie.vote_average"
                :pic="movie.poster_path" class="me-2 mb-2" :overview="movie.overview" :id="movie.id" :cast="movie.cast" />
        </div>
    </section>
    <section class="series-section" v-if="store.resultsType == 'series'">
        <h1 v-if="store.movies.length > 0" class="mt-3 ms-5"> Series</h1>
        <div class="card-container">
            <AppCard v-for="serie in store.series" :key="serie.id" :title="serie.title"
                :originalTitle="serie.original_title" :lang="serie.original_language" :vote="serie.vote_average"
                :pic="serie.poster_path" :cast="serie.cast" class="me-2 mb-2" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    color: rgb(94, 94, 94);
}

.card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
    margin: 1rem;
}
</style>

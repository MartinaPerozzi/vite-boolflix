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
    <div>
        <AppCard v-for="movie in store.movies" :key="movie.id" :title="movie.title" :originalTitle="movie.original_title"
            :lang="movie.original_language" :vote="movie.vote_average" :pic="movie.poster_path" />
        <AppCard v-for="serie in store.series" :key="serie.id" :title="serie.title" :originalTitle="serie.original_title"
            :lang="serie.original_language" :vote="serie.vote_average" :pic="serie.poster_path" />

    </div>
</template>

<style lang="scss" scoped></style>

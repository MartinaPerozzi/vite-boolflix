<script>
import { store } from "../data/store";
import AppCard from "./AppCard.vue";
export default {
    data() {
        return {
            store,

        }
    },
    components: { AppCard },

    methods: {
        filterResults(type) {
            store.resultsType = type;
        },
    }

}

</script>

<template>
    <div class="selection d-flex justify-content-center">
        <button @click="filterResults('movies')" :class="(store.resultsType == 'movies') ? 'active' : ''">MOVIES</button>
        <button @click="filterResults('series')" :class="(store.resultsType == 'series') ? 'active' : ''">SERIES</button>
        <button @click="filterResults('all')" :class="(store.resultsType == 'all') ? 'active' : ''">ALL</button>
    </div>

    <section class="movies-section" v-if="store.resultsType == 'movies' || store.resultsType == 'all'">
        <h1 v-if="store.movies.length > 0" class="mt-3 ms-5">Movies</h1>
        <div class="card-container">
            <AppCard v-for="movie in store.movies" :key="movie.id" :title="movie.title"
                :originalTitle="movie.original_title" :lang="movie.original_language" :vote="movie.vote_average"
                :pic="movie.poster_path" class="me-2 mb-2" :overview="movie.overview" :id="movie.id" :cast="movie.cast" />
        </div>
    </section>
    <section class="series-section" v-if="store.resultsType == 'series' || store.resultsType == 'all'">
        <h1 v-if="store.series.length > 0" class="mt-3 ms-5"> Series</h1>
        <div class="card-container">
            <AppCard v-for="serie in store.series" :key="serie.id" :title="serie.title"
                :originalTitle="serie.original_title" :lang="serie.original_language" :vote="serie.vote_average"
                :pic="serie.poster_path" :cast="serie.cast" class="me-2 mb-2" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.selection {
    gap: 2rem;
    width: 94vw;
    border-bottom: 3px solid #E51A14;
    padding: 1rem 3rem;
    margin: 0 auto;


    button {
        background-color: transparent;
        color: #E51A14;
        border: none;
        font-size: 1.5rem;
        position: relative;

        &:hover {
            color: white;
        }
    }

    .active {
        color: #E51A14;

        &::after {
            border-bottom: 3px solid white;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 1.2rem;
            left: 0px;
        }
    }

}

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

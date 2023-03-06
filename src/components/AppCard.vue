<script>
import { store } from "../data/store";
import axios from "axios";
export default {
    store,
    props: {
        title: String,
        originalTitle: String,
        lang: String,
        vote: Number,
        pic: String,
    },

}

</script>

<template>
    <div class="info d-flex flex-column">
        <span> {{ title }} </span>
        <span> {{ originalTitle }} </span>
        <div> {{ lang }}
            <!-- <img :src="`https://countryflagsapi.com/png/${lang}`" :alt="`Flag ${lang}`"> -->
            <img :src="`https://flagsapi.com/${lang.toUpperCase()}/shiny/64.png`" :alt="`Flag ${lang}`">
        </div>
        <span> {{ vote }} </span>
    </div>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w342${pic}`" alt="Image Poster">
    </div>
</template>

<style lang="scss" scoped>
// .info {
//     width: 342px;
//     height: 482px;
// }
</style>

<script>
import { store } from "../data/store";
export default {
    store,
    props: {
        title: String,
        originalTitle: String,
        lang: String,
        vote: Number,
        pic: String,
    }
}

</script>

<template>
    <div class="info d-flex flex-column">
        <span> {{ title }} </span>
        <span> {{ originalTitle }} </span>
        <span> {{ lang }} </span>
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

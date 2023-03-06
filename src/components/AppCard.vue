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
    stars: [],

    computed: {
        VoteStars() {
            let vote = parseInt.this.vote;
            let votestars = Math.ceil(vote / 2);
            console.log(votestars);

            for (let i = 0; i >= votestars; i++) {
                this.stars.push("ok");
                return this.stars;
            }

        }
    }

}

</script>

<template>
    <div class="flip-card">
        <div class="flip-inner">
            <div class="card-front">
                <img :src="`https://image.tmdb.org/t/p/w342${pic}`" alt="Image Poster">
            </div>
            <div class="card-back d-flex flex-column">
                <span> {{ title }} </span>
                <span> {{ originalTitle }} </span>
                <div> {{ lang }}
                    <!-- <img :src="`https://countryflagsapi.com/png/${lang}`" :alt="`Flag ${lang}`"> -->
                    <img :src="`https://flagsapi.com/${lang.toUpperCase()}/shiny/64.png`" :alt="`Flag ${lang}`">
                </div>
                <span> {{ vote }} </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flip-card {
    width: 342px;
    height: 513px;
    perspective: 1000px;

    .flip-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    &:hover .flip-inner {
        transform: rotateY(180deg);
    }
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}
</style>

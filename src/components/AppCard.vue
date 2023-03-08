<script>
import { store } from "../data/store";
import axios from "axios";

export default {
    data() {
        return {
            store,
            actors: []
        }
    },

    props: {
        title: String,
        originalTitle: String,
        lang: String,
        vote: Number,
        pic: String,
        overview: String,
        id: Number,
        cast: Array,
    },
    actors: [],

    computed: {
        voteStars() {
            let votestars = Math.ceil(this.vote / 2);
            return votestars;
        },
        emptyStars() {
            let emptystars = 5 - this.voteStars;
            console.log(emptystars);
            return emptystars;
        },
    },

    // methods: {
    //     getCast() {
    //         axios.get(`${store.actorUrl}${this.id}/credits?api_key=7d5cf1350cffe6cb5c1485e4e4bf2de0&language=en-US`)
    //             .then((response) => {
    //                 this.actors = response.data.cast.slice(0, 5);
    //             })
    //     },
    // },

    // created() {
    //     this.getCast();
    // }
}

</script>

<template>
    <div class="flip-card">
        <div class="flip-inner">
            <div class="card-front">
                <!-- Se l'immagine c'è -->
                <img v-if="pic" :src="`https://image.tmdb.org/t/p/w342${pic}`" alt="Image Poster">
                <!-- Altrimenti -->
                <h2 v-else="pic==null"> TITOLO {{ originalTitle }} </h2>
            </div>
            <div class="card-back d-flex flex-column">
                <span> Titolo: {{ title }} </span>
                <!-- SOLO se il titolo originale è diverso lo scrivo (risparmio ridondanze) -->
                <span v-if="title != originalTitle"> Titolo originale: {{ originalTitle }} </span>
                <div> Lingua: {{ lang }}
                    <!-- <img :src="`https://countryflagsapi.com/png/${lang}`" :alt="`Flag ${lang}`"> -->
                    <!-- La bandiera inglese gestita a parte per problema incompatibilità en/gb-->
                    <img v-if="lang === 'en'" src="https://flagsapi.com/GB/shiny/32.png" alt="Flag England">
                    <!-- Idem per il Giappone -->
                    <img v-if="lang === 'ja'" src="https://flagsapi.com/JP/shiny/32.png" alt="Flag Japan">
                    <img v-else:src="`https://flagsapi.com/${lang.toUpperCase()}/shiny/32.png`">
                </div>
                <div class="rating stars mt-2 mb-2">
                    <span> Voto: </span>
                    <font-awesome-icon v-for="star in voteStars" icon="fa-solid fa-star" />
                    <font-awesome-icon v-for="emptystar in emptyStars" icon="fa-regular fa-star" />

                </div>
                <p> Overview: {{ overview }}</p>
                <div class="cast">
                    <ul v-if="cast.length > 0">
                        <li>
                            <h5>Cast:</h5>
                        </li>
                        <!-- Primo metodo con chiamata in locale, ma per lasciare la card neutrale -->
                        <!-- <li v-for="actor in actors">{{ actor.name }}</li> -->
                        <!-- Secondo metodo -->
                        <li v-for="person in cast">{{ person.name }} </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    color: white;
}

ul {
    list-style-type: none;
}

.flip-card {
    width: 342px;
    height: 513px;
    perspective: 1000px;
    color: white;

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
    padding: 1rem;

    // Scroll per overview lunghe
    p {
        overflow-y: auto;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }
}

.card-front img {
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
}
</style>

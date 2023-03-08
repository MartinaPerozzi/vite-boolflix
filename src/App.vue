<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./data/store";
import style from "./assets/scss/style.scss";

export default {
  data() {
    return {
      store,
    }
  },

  components: { AppHeader, AppMain },

  methods: {
    // Richiamo sul genitore l'emit
    search(searchedValue) {
      console.log("che succede?", searchedValue);
    },

    fetchMovie(url) {
      // Funzione per chiamata axios (url in store)
      store.movies = [];

      axios.get(url)
        .then((response) => {

          response.data.results.forEach((result) => {
            axios.get(`${store.actorUrl}${result.id}/credits?api_key=7d5cf1350cffe6cb5c1485e4e4bf2de0&language=en-US`).then((response) => {
              let cast = response.data.cast.name;
              result = {
                // Stessi nomi così non devo cambiare sul Main (movie.)
                id: result.id,
                title: result.title,
                original_title: result.original_title,
                original_language: result.original_language,
                poster_path: result.poster_path,
                vote_average: result.vote_average,
                overview: result.overview,
                cast: response.data.cast.slice(0, 5),

              }
              store.movies.push(result);

            })

          });

          // Films.foreach((film) => {
          //   axios.get(urlcast + film_id).then((resp_cast) => {

          //     //... operazioni per recuperare il cast dalla risposta;

          //     film = {
          //       id: film.id,
          //       pic: film.poster,
          //       cast: cast_array
          //     }

          //     store.movies.push(film)
          //   })
          // })  

          // metti il risultato nell'array movie (in store)
          // store.movies = response.data.results;
        });

    },

    fetchSerie(url) {
      // // Funzione per chiamata axios (url in store)
      // axios.get(url)
      //   .then((response) => {
      //     // metti il risultato nell'array movie (in store)
      //     store.series = response.data.results;
      //   });
      store.series = [];

      axios.get(url)
        .then((response) => {

          response.data.results.forEach((result) => {
            axios.get(`${store.actorUrl}${result.id}/credits?api_key=7d5cf1350cffe6cb5c1485e4e4bf2de0&language=en-US`).then((response) => {
              let cast = response.data.cast.name;
              result = {
                // Stessi nomi così non devo cambiare sul Main (movie.)
                id: result.id,
                title: result.title,
                original_title: result.original_title,
                original_language: result.original_language,
                poster_path: result.poster_path,
                vote_average: result.vote_average,
                overview: result.overview,
                cast: response.data.cast.slice(0, 5),

              }
              store.series.push(result);

            })

          });

        });

    },

    fetchResearched(searchedValue) {
      // Prendi url e aggiungi la ricerca dell'utente (passata come parametro dal figlio Header)
      this.fetchMovie(`${store.movieUrl}${searchedValue}`);
      this.fetchSerie(`${store.serieUrl}${searchedValue}`);
      console.log(store.movies);
    },


  },

}

</script>

<template>
  <div>
    <AppHeader @on_search="fetchResearched" />
    <AppMain />
  </div>
</template>

<style></style>

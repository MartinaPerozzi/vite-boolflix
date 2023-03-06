<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./data/store";

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
      axios.get(url)
        .then((response) => {
          // metti il risultato nell'array movie (in store)
          store.movies = response.data.results;
        });
    },

    fetchSerie(url) {
      // Funzione per chiamata axios (url in store)
      axios.get(url)
        .then((response) => {
          // metti il risultato nell'array movie (in store)
          store.series = response.data.results;
        });
    },

    fetchResearched(searchedValue) {
      // Prendi url e aggiungi la ricerca dell'utente (passata come parametro dal figlio Header)
      this.fetchMovie(`${store.movieUrl}${searchedValue}`);
      this.fetchSerie(`${store.serieUrl}${searchedValue}`);
      console.log(store.movies);
    }
  }

}

</script>

<template>
  <AppHeader @on_search="fetchResearched" />
  <AppMain />
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;

}
</style>

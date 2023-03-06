import { reactive } from "vue";
export const store = reactive({
    searchedValue: "",
    // Creo l'array dove pushare i movies e l'url di base da cui partire
    movies: [],
    movieUrl: "https://api.themoviedb.org/3/search/movie?api_key=7d5cf1350cffe6cb5c1485e4e4bf2de0&language=it-IT&query=",

    // Creo la stessa cosa per le serie tv
    series: [],
    serieUrl: "https://api.themoviedb.org/3/search/tv?api_key=7d5cf1350cffe6cb5c1485e4e4bf2de0&language=it-IT&query=",

    // Bandiere
    // flagUrl: "https://countryflagsapi.com/png/"


    // IMG with dimension - width 342
    // imgUrl: "https://image.tmdb.org/t/p/w342",
}
);
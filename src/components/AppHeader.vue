<script>
import { store } from "../data/store";
export default {
    data() {
        return {
            store,
            // searchedValue: ""

        }
    },
    // dichiaro l'emit
    emits: ["on_search"],

    methods: {
        search() {
            this.$emit("on_search", store.searchedValue);
        }
    }
}

</script>

<template>
    <header>
        <div class="d-flex align-items-center">
            <h1 class="me-5">Boolflix</h1>
            <div class="input-group">
                <!-- Triggero l'evento customizzato nel submit-prevent passando come parametro il valore cercato-->
                <input type="text" class="form-control" placeholder="Search Movies or Tv Series..."
                    @submit.prevent="$emit('on_search', 'searchedValue')" aria-label="Search"
                    aria-describedby="button-addon2" v-model="store.searchedValue" @keyup="search()">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search()">Search</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    padding: 1rem 3rem;

    h1 {
        color: red;
        font-size: 3rem;
        margin-bottom: 0;
    }

    .input-group {
        input {
            height: 50px;
            background-color: black;
            color: white;
        }

        button {
            border: 1px solid white;
            color: white;
            width: 200px;

            &:hover {
                background-color: rgb(201, 236, 226);
                color: black;
            }
        }

    }
}

::placeholder {
    color: rgb(197, 197, 197);
}
</style>

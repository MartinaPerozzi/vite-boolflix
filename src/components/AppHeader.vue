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
        <div class="input-group mb-3">
            <!-- Triggero l'evento customizzato nel submit-prevent -->
            <input type="text" class="form-control" placeholder="Search Movies or Tv Series..."
                @submit.prevent="$emit('on_search', 'searchedValue')" aria-label="Search" aria-describedby="button-addon2"
                v-model="store.searchedValue" @keyup="search()">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search()">Search</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    padding: 1rem 2rem;

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

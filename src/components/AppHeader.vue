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
            <input type="text" class="form-control" placeholder="Search Movies or Tv Series"
                @submit.prevent="$emit('on_search', 'searchedValue')" aria-label="Search" aria-describedby="button-addon2"
                v-model="store.searchedValue" @keyup="search()">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search()">Button</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
}
</style>

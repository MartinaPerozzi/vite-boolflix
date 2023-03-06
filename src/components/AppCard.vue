<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        lang: String,
        vote: Number,
    }
}

</script>

<template>
    <div class="d-flex flex-column">
        <span> {{ title }} </span>
        <span> {{ originalTitle }} </span>
        <span> {{ lang }} </span>
        <span> {{ vote }} </span>
    </div>
</template>

<style lang="scss" scoped></style>

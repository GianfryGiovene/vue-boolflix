<template>
    <div>
        <img :src="imageUrl" :alt="text">
        {{text}}

    </div>
</template>

<script>
export default {
    name: 'CardItem',
    props: {
        text: String,
        imageUrl: String,

    }
}
</script>

<style lang="scss" scoped>
    .ac-card{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 0.5rem;
        text-transform: uppercase;
        img {
            margin-bottom: 0.5rem;
        }
    }

</style>
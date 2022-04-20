<template>
    <main>
        <div>
            <CardItem 
            :key="{index}" 
            v-for="(item,index) in sendList"
            :text="item.title"
            :imageUrl="item.poster_path "
            />
        </div>
    </main>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
    name:'MainComponent',
    components:{
        CardItem,
    },
    props:{
        sendList: Array
    }
}
</script>

<style lang="scss" scoped>
    main{
        width: 100%;
        & > div{
            max-width: 1200px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            border: 1px solid black;
            *{
                width: calc(100% / 5 - 3rem);
            }
        }
    }
</style>
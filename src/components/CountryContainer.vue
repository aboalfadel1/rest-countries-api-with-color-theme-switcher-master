<template lang="">
    <div class="xl:w-full grid grid-cols-1 w-96 m-auto md:grid-cols-2 md:w-full md:gap-10 xl:grid-cols-4 xl:gap-16 xl:m-0 dark:bg-veryDarkBlue dark:text-darkModeText">
        <CountryItem v-for="(countrie,index) in countries" :key="index"
        :name="countrie.name.common" 
       :pp="countrie.population.toLocaleString('en-US')"
        :flag="countrie.flags.png"
        :region="countrie.region"
        :capital="countrie.capital" />
    </div>
</template>
<script>
    import CountryItem from './CountryItem.vue';
export default {
    components:{
        CountryItem,
    },
    props:["countries"]
}
</script>
<style lang="">
    
</style>
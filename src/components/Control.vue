<template lang="">
    <div class="mt-12 mb-20  relative lg:flex justify-between lg:w-full">
        <div class="w-8/12">
            <input class="w-fit outline-none px-24 py-5 shadow-sm lg:w-full" @keyup.backspace="$emit('searchCountry',searchInput)" @keyup="$emit('searchCountry',searchInput)" type="text" placeholder="Search for a country" v-model="searchInput">
            <i class="fa fa-search absolute text-2xl top-5 left-8 text-gray-400 cursor-pointer" ></i>
           
        </div>
        <select name="" id="" class="mt-14 p-5 w-72 outline-none border-none lg:mt-0" @change="$emit('getSelected',selected)" v-model="selected">
            <option value="" class="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
</template>
<script>

export default {
    data(){
        return{
         selected:"",
         searchInput:"",
         
        }
    }
}
</script>
<style lang="">
    
</style>
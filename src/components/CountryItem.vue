<template lang="">
    <a href="#" class="bg-gray-50 grid-col-1 rounded-lg shadow-md mb-16 lg:mb-0 lg:grid-col-4">
       <img class="w-full rounded-t-lg" :src="flag" alt="">
       <div class="p-10">
        <h3 class="font-bold text-3xl mb-5">{{name}}</h3>
        <p class="text-xl"><span class="font-semibold">Population:</span> {{pp}}</p>
        <p class="text-xl"><span class="font-semibold">Region:</span> {{region}}</p>
        <p class="text-xl"><span class="font-semibold">Capital:</span> </p>
       </div>
    </a>
</template>
<script>
export default {
    props:["name","flag","region","pp","capital"]
}
</script>
<style lang="">
    
</style>
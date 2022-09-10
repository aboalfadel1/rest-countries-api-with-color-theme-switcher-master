<template >
    <nav class="bg-white shadow-md dark:shadow-xl dark:bg-darkBlue">
        <div class="container m-auto flex justify-between items-center px-5 py-10 dark:text-darkModeText cursor-pointer ">
       <p class="font-bold text-2xl dark:text-darkModeText">Where in the world?</p>
       <div class="flex items-center gap-2" @click="darkMode()">
        <i class="fa-solid fa-moon text-2xl " ></i>

        <p class="font-semibold" >Dark Mode</p>

       </div>
    </div>
    </nav>
</template>
<script>
export default {
    methods:{
        darkMode()
        {
            document.documentElement.classList.toggle('dark')
        }
    }
}
</script>
<style lang="">
    
</style>
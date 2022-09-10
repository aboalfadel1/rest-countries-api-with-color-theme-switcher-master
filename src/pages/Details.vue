<template lang="">
    <div v-if="countryDetails">
    <Navbar></Navbar>

    <div class="container m-auto p-10 dark:bg-veryDarkBlue mt-10 dark:text-darkModeText" v-if="countryDetails">
        <router-link to="/" class="bg-white px-7 py-2 shadow-xl dark:bg-darkBlue">
            <i class="fa fa-long-arrow-left text-lg"></i>
            <span class="ml-5 dark:bg-darkBlue">Back</span>
        </router-link>
        <div class="lg:grid grid-cols-2 lg:space-x-20">
        <div class="m-auto mt-16 flex justify-center lg:grid-cols-1 w-full">
            <img class="w-full rounded-2xl object-cover shadow-2xl border" :src="countryDetails.flags.png" alt="...">
        </div>
        <div class="grid-cols-1 lg:px-20">
            <h2 class="font-bold text-2xl mt-10 mb-5">{{countryDetails.name.common}}</h2>
            <p class="py-1 text-lg"><span class="font-semibold ">Population: </span>{{changedText}}</p>
            <p class="py-1 text-lg"><span class="font-semibold ">Region: </span>{{countryDetails.region}}</p>
            <p class="py-1 text-lg"><span class="font-semibold ">Native Name: </span> <span v-for="native in countryDetails.name.nativeName"> {{native.official+" "}}</span></p>
            <p class="py-1 text-lg"><span class="font-semibold ">Sub Region: </span>{{countryDetails.subregion}}</p>
            <p class="py-1 text-lg"><span class="font-semibold ">Capital: </span><span v-for="(cap,index) in countryDetails.capital" ::key="index">{{cap+" "}}</span></p>
            <p class="py-1 text-lg mt-10"><span class="font-semibold ">Top Level Domain: </span><span v-for="(domin,i) in countryDetails.tld" :key="i">{{domin+" " }}</span></p>
            <p class="py-1 text-lg"><span class="font-semibold ">Currencies: </span><span v-for="currencie in countryDetails.currencies"><span v-for="test in currencie">{{test +" "}}</span></span></p>
            <p class="py-1 text-lg"><span class="font-semibold ">Languages: </span> <span v-for="(lang,index) in countryDetails.languages" :key="index">{{lang+" "}}</span></p>
            <h3 class="mt-16 text-xl font-semibold">Border Countries:</h3>
            <div class="grid grid-cols-4 gap-5 text-center cursor-pointer">
                <div class=""  v-if="countryDetails.borders" v-for="(border,index) in countryDetails.borders" :key="index" @click="rerender(border)">
                <p  class="bg-white px-10 py-2 shadow-md mt-5 ">
                    
                    <span>{{border}}</span>
                </p>
                </div>
                <div v-else class="" >
                <p  class="bg-white text-center py-2 shadow-md mt-5">
                    
                    <span>Keine</span>
                </p>
                </div>
            </div>
            
        </div>
    </div>
    </div>
</div>
    <Preloader v-else />
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Preloader from '../components/Preloader.vue';
export default {
    components:{
        Navbar,
        Preloader
    },
    data(){
        return{
        countryName:this.$route.params.name,
        countryDetails:null,
        changedText:""
    }
    },
    methods:{
        getSingel()
        {
            this.axios.get("https://restcountries.com/v3.1/name/"+this.countryName)
            .then(res=>{
                [this.countryDetails]=res.data
                this.changedText=this.countryDetails.population.toLocaleString('en-US')

            })
            .catch(error=>{
                console.log(error)
            })
        },
        rerender(border)
        {
            this.axios.get("https://restcountries.com/v3.1/alpha/"+border)
            .then(res=>{
                [this.countryDetails]=res.data
                this.changedText=this.countryDetails.population.toLocaleString('en-US')

                this.$router.push("/details/"+this.countryDetails.name.common)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },    
    created() {
        this.getSingel()
    },
}
</script>
<style lang="">
    
</style>
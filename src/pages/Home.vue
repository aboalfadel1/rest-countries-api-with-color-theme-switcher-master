<template lang="">
<div v-if="countries.length">
    <Navbar></Navbar>
    <div class="container m-auto">
      <Control @getSelected="getCountries($event)" @searchCountry="searchin($event)"/>
      <CountryContainer :countries="filteredCountries" />
      
    </div>
  </div>
   <Preloader v-else />
</template>
<script>
    import CountryItem from '../components/CountryItem.vue';
    import Preloader from '../components/Preloader.vue';
    import CountryContainer from '../components/CountryContainer.vue'; 
    import Control from '../components/Control.vue';
    import Navbar from '../components/Navbar.vue';
    import axios from "axios"
  export default {
    components:{
      Control,
      CountryItem,
      CountryContainer,
      Navbar,
      Preloader
    },
    data(){
      return {
        countries:[],
        filteredCountries:[],
      }
    },
    methods: {
     
      getCountries(selected)
      {
        axios.get("https://restcountries.com/v3.1/all").
        then((response) => {
          this.countries=response.data
          this.filteredCountries=this.countries

          switch (selected)
          {
            case "Africa":
              this.filteredCountries=this.countries.filter(e=> e.region==selected )
              break;
              case "Asia":
              this.filteredCountries=this.countries.filter(e=> e.region==selected )
              break;
                case "Africa":
              this.filteredCountries=this.countries.filter(e=> e.region==selected )
              break;
            case "Americas":
            this.filteredCountries=this.countries.filter(e=> e.region==selected )
            break;
            case "Europe":
              this.filteredCountries=this.countries.filter(e=> e.region==selected )
              break;
              case "Oceania":
              this.filteredCountries=this.countries.filter(e=> e.region==selected )
              break;
              default:
                this.countries=this.filteredCountries;
              break;
  
          }
          
        })
        .catch(error=>{
          console.log(error);
        })
      },
      searchin(searchInput)
      {
        this.filteredCountries=this.countries.filter(e=> e.name.common.toLowerCase().includes(searchInput))
      }
    },
  
    created(){
      this.getCountries();
    }
  }
  </script>
<style lang="">
    
</style>

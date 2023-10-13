<script>
import Main from './components/Main.vue',
import Searchbar from './components/SearchBar.vue'
import {store} from "./components/data/store"
export default {
name: "App",
components: {
  Main,
  Searchbar
},
data(){
  return{
    store
  }
},
methods:{
  getApi(){
    axios.get(store.apiUrlBase,{
      params: {
        author: store.authortosearch
      }
    })
    .then(res) => {
        store.booklist = res.data.docs;
    }
    
  }
}
}
</script>

<template>
  
</template>

<style>

</style>
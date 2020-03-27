<template>
    <div>
        <input type='text' id="bar" placeholder="Search for a movie" v-model='query' @keyup='getResult(query)'>
        <span class="movie" v-for='result in results' :key='result.id' style="margin: 0 auto">
   <img class="movie-img" v-bind:src="'http://image.tmdb.org/t/p/w500/' +  result.poster_path" @error="imgUrlAlt" width='auto' style="" data-toggle="modal" :data-target="'#demo' + result.id">
    </span>
    </div>
</template>

<script>
//import { mapState } from '@/store'

export default {
    name: 'Search', 
    mounted () {
        this.store.dispatch('getResult')
    }, 

}
</script>

<style>

</style>
<template>
    <div class='search'>
        <input type='text' id="bar" placeholder="Search for a movie" v-model='query' @keyup='getMovies(query)'>
        <div class="container">
            <div class="row" style="margin-top: 10%">
                <div class="films col-md-12">
                    <span class="film" v-for='movie in movies' :key='movie.id' style="margin: 0 auto" data-toggle="modal" :data-target="'#demo' + movie.title">
   <img class="movie-img" v-bind:src="'http://image.tmdb.org/t/p/w500/' +  movie.poster_path" @error="imgUrlAlt" width='auto' style="">

     <p id="display-txt" style="">{{movie.title}} <br> {{movie.vote_average}}</p>
     <div class="modal slide" :id="'demo' + movie.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
      <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                    <i data-feather="x"></i>
                    </button>
                    <div class="row">
                        <div class="col-md-6">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +  movie.backdrop_path" width='100%' style="border-radius: 15px;" @error="imgUrlAltBg">
                        </div>
                        <div class="col-md-6">
                            <h2 style="text-align: left">{{movie.title}}</h2>
                            <p>Rating: {{movie.vote_average}}</p>
                            <p>Audience Rating: {{movie.popularity}}</p>
                            <p>Released: {{movie.release_date}}</p>
                            <p>Synopsis: {{movie.overview}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </span>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import img from '../assets/no-img.svg'
import img1 from '../assets/no-img-bg.svg'

export default {
  name: 'Search',
  mounted () {
    //this.$store.dispatch('getResult', 'test')
  },
  computed: {
      ...mapState(['movies']), 
      /*query: {
          get () {
          return this.$store.state.query
        },
        set (value) {
            this.$store.commit('updateQuery', value)
            console.log(value)
        }
      }*/
    },
  methods: {
      getMovies(query) {
          this.$store.dispatch('getResult', query)
      },
      imgUrlAlt(event) {
          event.target.src = img
      }, 
      imgUrlAltBg(event) {
          event.target.src = img1
      }
  }
}

</script>

<style>
body {
    background: #fff;
    font-family: 'Poppins', sans-serif !important;
    padding-right: 0 !important;
}
#bar  {
  background:transparent;
  border: #e2e2e2 1.5px solid;
  padding: 12px 20px;
  min-width: 400px;
  width: 50vw;
  border-radius: 4px ;
  margin: 0 auto;
}


#display-txt {
  width: 287px; 
  color: #0e153a; 
  margin-left: 6px; 
  text-align: left; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px
}

.films {
    display: contents;
}

.film {
    margin: 2%;
    background: #cff1ef; 
    padding: 10px;
    border-radius: 10px;
    min-width: 260px;
    width: auto;
    margin-bottom: 30px !important;
    cursor: pointer;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
}

.movie-img{
   width: 70px;

    object-fit: cover;
    border-radius: 8px;
    float: left; 
    margin-right: 17px;
}

.first-column {
  width: 40%;
  float: left;
}

p {
    text-align: left
}

.second-column {
  width: 40%;
  float: right;
}
.modal-open{
  overflow:auto;
  padding-right:0 !important;
  }
.modal {
    padding-right: 0px !important;
}
</style>

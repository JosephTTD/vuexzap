<template>
    <div>
        <div class='search'>
        <input type='text' id="bar" autofocus value="Search" placeholder="Search for a movie" v-model='query' @keyup='getMovies(query)'>
        </div>
        <div class="showcase">
        <div class="container">
            <div class="row" style="margin-top: 10%">
                <div class="films col-md-12">
                    <span class="film" v-for='movie in movies' :key='movie.id' style="margin: 0 auto">
   <img class="movie-img" v-bind:src="'http://image.tmdb.org/t/p/w500/' +  movie.poster_path" data-toggle="modal" :data-target="'#demo' + movie.id" @error="imgUrlAlt" width='auto' style="">

     <p id="display-txt" style="">{{movie.title}}</p> <span class="rating">{{movie.vote_average}} out of 10 </span><span id="ov-sm">{{ movie.overview }}</span>
     <div class="modal slide" :id="'demo' + movie.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog slideLeft" role="document">
            <div class="modal-content" style="background: url('http://image.tmdb.org/t/p/w500/ +  movie.backdrop_path')">
      <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><img width="30px" src="../assets/close.svg"></span>
                    </button>
                    <div class="row">
                        <div class="col-md-6">
                            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +  movie.poster_path" class="movie-back" width='100%'  @error="imgUrlAltBg">
                        </div>
                        <div class="col-md-6" style="">
                            <h2 style="text-align: left; font-weight: bold;">{{movie.title}}</h2><br>
                            <p>Popularity: {{movie.popularity}}%</p>
                            <p>Released: {{movie.release_date}}</p>
                            <p style="text-align: left; font-size: 40px; font-weight: bold">{{movie.vote_average}}<span style="font-size: 20px; font-weight: normal"> / 10</span></p>
                            <p><span style="font-size: 19px">Overview: </span><br> {{movie.overview}}</p>
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
    </div>
</template>

<script>
import { mapState } from 'vuex'
import img from '../assets/no-img.svg'
import img1 from '../assets/no-img-bg.svg'
//import icon from '../assets/close.svg'
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
      },
  }
}

</script>

<style>
body {
    background: #fff;
    font-family: 'Poppins', sans-serif !important;
    padding-right: 0 !important;
}

.showcase {
    background: #fff; 
    padding-top: 10px; 
    height: 100%; 
    border-radius: 30px 30px 0px 0px; 
    margin-top: -2%;
    -webkit-transition: all 3s ease-in-out;
    -moz-transition: all 3s ease-in-out;
    -ms-transition: all 3s ease-in-out;
    -o-transition: all 3s ease-in-out;
    transition: all  3s ease-in-out;
}
.movie-back {
  object-fit: cover; 
  height: 500px; 
  border-radius: 15px;
}

#bar  {
  background:transparent;
  border: none;
  padding: 12px 20px;
  min-width: 400px;
  width: 50vw;
  border-radius: 4px ;
  margin: 0 auto;
  font-size: 35px;
  color: #fff; 
}
input:focus {
    outline: none !important;
}
.search  {
    padding-bottom: 50px;
    background: #ffbc6c;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #fff;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #fff;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #fff;
}
:-moz-placeholder { /* Firefox 18- */
  color: #ffff;
}

#ov-sm{
  text-overflow: ellipsis;
  max-width: 133px; 
  float: left;
  font-size: 12px; 
  overflow: hidden;
  white-space: nowrap;
  margin-top: 10px;
  margin-left: -70px;
}

.rating {
    font-size: 12px;
    color: #ffbc6c;
    margin-top: -10px;
    float: left;
    margin-left: 10px
}

#display-txt {
  width: 287px; 
  color: #0e153a; 
  margin-left: 10px; 
  text-align: left; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 133px; 
  margin-top: 20px
}

.films {
    display: contents;
}

.film {
    margin: 2%;
    /*background: #cff1ef;*/
    padding: 10px;
    border-radius: 10px;
    min-width: 30px;
    width: auto;
    margin-bottom: 30px !important;
    cursor: pointer;
}

.movie-img{
   width: 154px;
   max-height: 230px; 
   min-height: 230px;
    object-fit: cover;
    border-radius: 8px;
    /*float: left; */
    margin-right: 17px;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
}

.movie-img:hover {
    margin-top: -30px;
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

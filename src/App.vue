<template>
  <div id="app">
    <!--<img style="margin-top: " src="./assets/zap.svg" width="250vw">-->
   
    <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.modal-content {
    border: none !important;
    border-radius: 0px; 
    height: 100vh; 
    overflow-x: hidden;
    color: #fff;
    background: #ffbc6c;
    padding: 4%
}

.modal-header {
    border: none !important
}
.modal-dialog {
    min-width: 100% !important;
    margin: 0 !important;
}

.slideLeft{
	animation-name: slideLeft;
	-webkit-animation-name: slideLeft;

	animation-duration: 0.3s;
	-webkit-animation-duration: 0.3s;

	animation-timing-function: ease-in-out;
	-webkit-animation-timing-function: ease-in-out;

	visibility: visible !important;
}

@keyframes slideLeft {
	0% {
		transform: translateX(150%);
	}
	95%{
		transform: translateX(2%);
	}
	100% {
		transform: translateX(0%);
	}
}

@-webkit-keyframes slideLeft {
	0% {
		-webkit-transform: translateX(150%);
	}
	95%{
		-webkit-transform: translateX(2%);
	}
	100% {
		-webkit-transform: translateX(0%);
	}
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
@media (max-width: 700px) {
	.movie-back {
		height: 310px;
	}
}
</style>

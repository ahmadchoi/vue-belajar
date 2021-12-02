<template>
  <div id="app">

        <!-- <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">#</a>
            </div>

            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li><router-link :to="{name:'all'}">All</router-link></li>
                <li><router-link :to="{name:'completed'}">Completed</router-link></li>
                <li><router-link :to="{name:'important'}">Important</router-link></li>
              </ul>
            </div>
          </div>
        </nav> -->

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">#</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- <li class="nav-item"><a class="nav-link" href="#">Link</a></li> -->
                <li class="nav-item"><router-link class="nav-link" :to="{name:'all'}">All</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{name:'completed'}">Completed</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{name:'important'}">Important</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{name:'contohvuex'}">Contoh Vuex</router-link></li>

              </ul>
            </div>
          </div>
        </nav>


    <div class="col-md-6 mt-10" style="margin-top:50px">
      <div class="card">
        <div class="card-title">
          <h1>Simpel Todo</h1>
          <div class="card-body">
            <!-- <Todo></Todo> -->
            <router-view></router-view>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

h2 {
  color: #2c3e50;
}
</style>

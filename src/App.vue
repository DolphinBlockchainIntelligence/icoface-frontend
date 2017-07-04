<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar uk-sticky>
      <div class="uk-navbar-left">
        <router-link class="uk-navbar-item uk-logo" to="/"><span uk-icon="icon: happy"></span> ICOface</router-link>
        <div class="header-search">
          <input class="uk-input uk-form-width-medium" type="text" placeholder="Search ICOface. For example: Sasha Ivanov" id="search-input">
          <div class="uk-button-group">
            <button class="uk-button uk-button-default" @click="searchByName()">Name</button>
            <button class="uk-button uk-button-default" @click="searchByRole()">Role</button>
            <button class="uk-button uk-button-default" @click="searchByICO()">ICO</button>
          </div>
        </div>
        <form role="form" class="form header-search-photo" @submit="fileSubmit()">
          <button class="uk-button uk-button-primary" @click="chooseFile()"><span uk-icon="icon: image"></span></button>
          <div class="form-group hide">
            <label for="file">File</label>
            <input id="file" type="file" class="form-control" onchange="document.getElementById('upload').click()">
          </div>
          <button id="upload" type="submit" class="btn btn-primary hide">Upload</button>
        </form>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li v-if="username"><a href="#"><span uk-icon="icon: user"></span> {{ username }}</a></li>
            <li v-else><a href="/auth/facebook"><span uk-icon="icon: user"></span> Auth with facebook</a></li>
            <li v-if="username"><router-link to="/add"><span uk-icon="icon: plus"></span> Add face</router-link></li>
        </ul>
      </div>
    </nav>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import 'uikit/dist/css/uikit.css'
import UIkit from 'uikit/dist/js/uikit.min'
import Icons from 'uikit/dist/js/uikit-icons.min'
import axios from 'axios'
import routes from './router'
export default {
  name: 'app',
  data: () => ({
    username: false,
    faces: []
  }),
  mounted () {
    UIkit.use(Icons)
    axios.get(this.server + '/name')
    .then(response => {
      this.username = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    searchByName: function () {
      console.log(document.getElementById('search-input').value)
      axios.post('/textsearch', {
        'name': document.getElementById('search-input').value
      })
      .then(response => {
        console.log(response.data)
        console.log(routes)
        if (this.$route.path == '/face' || this.$route.path == '/search') {
          routes.push({ name: 'Hello' })
          routes.push({ name: 'Face', params: response.data})
        } else {
          routes.push({ name: 'Face', params: response.data})
        }
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    searchByRole: function () {
      axios.post('/textsearch', {
        'role': document.getElementById('search-input').value
      })
        .then(response => {
          console.log(response.data)
          console.log(routes)
          if (this.$route.path == '/face' || this.$route.path == '/search') {
            routes.push({ name: 'Hello' })
            routes.push({ name: 'Face', params: response.data})
          } else {
            routes.push({ name: 'Face', params: response.data})
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    searchByICO: function () {
      axios.post('/textsearch', {
        'proj': document.getElementById('search-input').value
      })
        .then(response => {
          console.log(response.data)
          console.log(this.$route.path)
          console.log(routes) 
          if (this.$route.path == '/face' || this.$route.path == '/search') {
            console.log(this.$route.path)
            routes.push({ name: 'Hello' })
            routes.push({ name: 'Face', params: response.data})
          } else {
            routes.push({ name: 'Face', params: response.data})
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    chooseFile: function () {
      document.getElementById('file').click()
    },
    fileSubmit: function () {
      let file = document.getElementById('file').files[0]
      console.log(file)
      var output = document.getElementById('output');
      document.getElementById('upload').onclick = function () {
        var data = new FormData();
        data.append('photo', document.getElementById('file').files[0])
        var config = {
          onUploadProgress: function(progressEvent) {
            var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
          }
        }
        axios.post('/imgsearch', data, config)
          .then(response => {
            console.log(response.data)
            routes.push({ name: 'Face', params: response.data})
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
}
</script>

<style lang="sass">
.hide
  display: none
.header-search
  white-space: nowrap
  input
    width: 322px
    margin-right: -5px
</style>

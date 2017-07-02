<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar uk-sticky>
      <div class="uk-navbar-left">
          <router-link class="uk-navbar-item uk-logo" to="/"><span uk-icon="icon: happy"></span> ICOface</router-link>
        <form class="header-search">
          <input class="uk-input uk-form-width-medium" type="text" placeholder="Search ICOface. For example: Sasha Ivanov">
        </form>
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
            <li v-if="username"><span uk-icon="icon: user"></span> {{ username }}</li>
            <li v-else><a :href="server + '/auth/facebook'"><span uk-icon="icon: user"></span> Auth with facebook</a></li>
            <li><router-link to="/add"><span uk-icon="icon: plus"></span> Add face</router-link></li>
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
    server: 'http://74.119.194.18',
    username: false
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
    chooseFile: function() {
      document.getElementById("file").click()
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
        axios.post('http://74.119.194.18/imgsearch', data, config)
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
  width: 500px
  input
    width: 100%
</style>

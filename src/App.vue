<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar uk-sticky>
      <div class="uk-navbar-left">
        <a href="http://dolphin.bi/" class="dolphinbi" target="_blank"><img src="/static/img/dolphinbi-logo.png"></a>
        <router-link class="uk-navbar-item uk-logo" to="/"><span uk-icon="icon: happy"></span> ICOface</router-link>
        <div class="header-search">
          <input class="uk-input uk-form-width-medium" type="text" placeholder="Search ICOface. For example: Sasha Ivanov" id="search-input">
          <div class="uk-button-group">
            <button class="uk-button uk-button-default" @click="searchByName()">Name</button>
            <button class="uk-button uk-button-default" @click="searchByRole()">Role</button>
            <button class="uk-button uk-button-default" @click="searchByICO()">ICO</button>
          </div>
        </div>
        <form id="searchByPhoto" role="form" class="form header-search-photo">
          <button class="uk-button uk-button-primary" @click="chooseFile()"><span uk-icon="icon: image"></span></button>
          <input id="file" type="file" @change="fileSubmit()" class="hide">
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
    faces: [],
    searchCounter: 0,
    photo: ''
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
      axios.post('http://icoface.dolphin.bi/textsearch', {
        'name': document.getElementById('search-input').value
      })
      .then(response => {
        this.searchCounter++
        let data = response.data
        data.id = this.searchCounter
        routes.push({ name: 'Face', params: data })
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    searchByRole: function () {
      axios.post('http://icoface.dolphin.bi/textsearch', {
        'role': document.getElementById('search-input').value
      })
      .then(response => {
        this.searchCounter++
        let data = response.data
        data.id = this.searchCounter
        routes.push({ name: 'Face', params: data })
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    searchByICO: function () {
      axios.post('http://icoface.dolphin.bi/textsearch', {
        'proj': document.getElementById('search-input').value
      })
      .then(response => {
        this.searchCounter++
        let data = response.data
        data.id = this.searchCounter
        routes.push({ name: 'Face', params: data })
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
      let data = new FormData();
      data.append('photo', document.getElementById('file').files[0])
      let config = {
        onUploadProgress: function(progressEvent) {
          let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
        }
      }
      axios.post('http://icoface.dolphin.bi/imgsearch', data, config)
      .then(response => {
        this.searchCounter++
        let data = response.data
        data.id = this.searchCounter
        routes.push({ name: 'Face', params: data })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style lang="sass">
.hide
  display: none
.dolphinbi img
  height: 30px
  margin-left: 15px
  filter: grayscale(100%)
  &:hover
    filter: none
.header-search
  white-space: nowrap
  input
    width: 322px
    margin-right: -5px
</style>

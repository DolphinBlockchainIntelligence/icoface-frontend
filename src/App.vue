<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar uk-sticky>
      <div class="uk-navbar-left">
          <router-link class="uk-navbar-item uk-logo" to="/">ICOface</router-link>
        <form class="header-search">
          <input class="uk-input uk-form-width-medium" type="text" placeholder="Search ICOface. For example: Sasha Ivanov">
        </form>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li><a :href="server + '/auth/facebook'"><span uk-icon="icon: user"></span>&nbsp;Auth with facebook</a></li>
            <li><router-link to="/add"><span uk-icon="icon: happy"></span>&nbsp;Add face</router-link></li>
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
import {$, jQuery} from 'jquery'
import UIkit from 'uikit/dist/js/uikit.min'
import Icons from 'uikit/dist/js/uikit-icons.min'
import axios from 'axios'
export default {
  name: 'app',
  data: () => ({
    server: 'http://74.119.194.18'
  }),
  mounted () {
    UIkit.use(Icons)
  }
}
</script>

<style lang="sass">
.header-search
  width: 500px
  input
    width: 100%
</style>

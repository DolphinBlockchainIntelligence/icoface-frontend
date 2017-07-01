<template>
<!--   <div class="hello">
    <form class="hello-search">
      <input class="uk-input uk-form-width-medium uk-form-large" type="text" placeholder="Search ICOface. For example: Sasha Ivanov">
    </form> -->
    <div class="hello-container">
<!--       <div  v-for="item in faces" class="uk-card uk-card-default uk-margin">
        <div class="uk-card-media-left uk-cover-container">
          <img :src="item.photo" alt="" uk-cover>
        </div>
      </div> -->
      <router-link v-for="item in faces" :to="'/face/'+item.id" class="hello-face" style="background-image: url('/static/img/1.jpg')"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      faces: [
        {id: "sasha-ivanov", photo: "/static/img/1.jpg"},
        {id: "sasha-ivanov", photo: "/static/img/2.jpg"},
        {id: "sasha-ivanov", photo: "/static/img/3.jpg"},
        {id: "sasha-ivanov", photo: "/static/img/4.jpg"},
        {id: "sasha-ivanov", photo: "/static/img/5.jpg"},
        {id: "sasha-ivanov", photo: "/static/img/6.jpg"},
      ]
    }
  }
}
</script>

<style lang="sass">
.hello-search
  position: fixed
  top: 50%
  left: calc(50% - 300px)
  width: 600px
  input
    width: 100%
.hello-container
  display: flex
  flex-wrap: wrap
  .hello-face
    width: 300px
    height: 300px
    background-size: cover
    flex: 1 0 auto
</style>

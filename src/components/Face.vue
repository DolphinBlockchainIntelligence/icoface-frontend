<template>
  <div class="uk-container">
    <!-- <h3>Sasha Ivanov</h3> -->
    <div class="face-list" v-for="item in items">
      <!-- <div class="face-item uk-grid"> -->
      <div class="face-item">
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
          <div class="uk-card-media-left uk-cover-container">
            <img :src="item.photo" alt="" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{ item.name }}</h3>
              <!-- <div class="face-name"><h4 class="label">{{ item.name }}</h4></div> -->
              <div class="face-project"><h5 class="label">Project:</h5> <a :href="item.project_url" target="_blank">{{ item.project }}</a></div>
              <div class="face-role"><h5 class="label">Role:</h5> {{ item.role }}</div>
            </div>
          </div>
        </div>
<!--         <div class="uk-width-1-6@m">
          <img class="face-photo" :src="item.photo" :alt="item.name">
        </div>
        <div class="uk-width-expand@m">
          <div class="face-name"><h4 class="label">{{ item.name }}</h4></div>
          <div class="face-project"><h5 class="label">Project:</h5> <a :href="item.project_url" target="_blank">{{ item.project }}</a></div>
          <div class="face-role"><h5 class="label">Role:</h5> {{ item.role }}</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'face',
  data () {
    return {
      items: [
        { name: 'Sasha Ivanov', url: 'dashboard', role: 'CEO', photo: '/static/img/1.jpg', project: 'Waves', project_url: 'https://wavesplatform.com/'},
        { name: 'Sasha Ivanov', url: 'dashboard', role: 'Developer', photo: '/static/img/2.jpg', project: 'bitShares', project_url: 'https://bitshares.org/'},
        { name: 'Sasha Ivanov', url: 'dashboard', role: 'Investor', photo: '/static/img/3.gif', project: 'Ethereum', project_url: 'https://www.ethereum.org/'},
      ]
    }
  }
}
</script>

<style lang="sass">
.face-item
  // border-bottom: 1px solid #ddd
  // padding-bottom: 10px
  // margin-bottom: 10px
  // .face-photo
  //   max-height: 100px
  //   max-width: 100px
  .face-name
    .label
      display: inline-block
      font-weight: bold
      margin-bottom: 7px
      color: #777
  .face-project
    .label
      display: inline-block
      font-weight: bold
      margin-bottom: 0
      color: #777
  .face-role
    .label
      display: inline-block
      font-weight: bold
      margin-bottom: 0
      color: #777
</style>

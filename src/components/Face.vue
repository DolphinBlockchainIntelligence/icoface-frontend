<template>
  <div class="uk-container">
    <div class="face-list" v-for="item in items">
      <div class="face-item">
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
          <div class="uk-card-media-left uk-cover-container">
            <img :src="item.photo" alt="" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{ item.name }}</h3>
              <div class="face-project"><h5 class="label">Project:</h5> <a :href="item.project_url" target="_blank">{{ item.project }}</a></div>
              <div class="face-role"><h5 class="label">Role:</h5> {{ item.role }}</div>
            </div>
          </div>
        </div>
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
        { name: 'Putin Vladimir', url: 'dashboard', role: 'CEO', photo: '/static/img/1.jpg', project: 'PutinCoin', project_url: 'https://coinmarketcap.com/currencies/putincoin/'},
        { name: 'Sasha Ivanov', url: 'dashboard', role: 'CEO', photo: '/static/img/2.jpg', project: 'Waves', project_url: 'http://wavesplatform.com/'},
        { name: 'Buterin Vitalik', url: 'dashboard', role: 'CEO', photo: '/static/img/6.jpg', project: 'Ethereum', project_url: 'https://www.ethereum.org/'},
        { name: 'Patrick Dai', url: 'dashboard', role: 'CEO', photo: '/static/img/5.jpg', project: 'Ethereum', project_url: 'https://qtum.org'},
      ]
    }
  }
}
</script>

<style lang="sass">
.face-item
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

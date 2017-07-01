<template>
  <div class="add uk-container">
    <form>
      <fieldset class="uk-fieldset">
          <legend class="uk-legend">Add Face to blockchain</legend>
          <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Name">
          </div>
          <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Face url (facebook/linkedin)">
          </div>
          <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Face photo url">
          </div>
          <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Face role">
          </div>
          <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Project">
          </div>
          <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Project url">
          </div>
          <div class="uk-margin">
            <button class="uk-button uk-button-primary">Burn block</button>
          </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'add'
}
</script>

<style lang="sass">

</style>

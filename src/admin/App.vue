<template lang="pug">  
  div.root-wrapper-container
    template(v-if="$route.meta.public")
        router-view 
    template(v-else)   
      app-header
      main-menu

      main.maincontent__admin
        router-view
    tooltip

</template>




<script>
  import login from './components/pages/login.vue';
  import appHeader from './components/header.vue';
  import mainMenu from './components/main-menu.vue';
  import tooltip from './components/tooltip.vue';


  export default {
    components: {
      appHeader, mainMenu, login, tooltip
    }
  }

</script>


<style lang="postcss">
@import "./styles/main.pcss";
</style>
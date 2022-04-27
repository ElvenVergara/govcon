<template>
  <div class="parallax">

      <div style="width:85%;margin-left:7%;background-color: black;">
          <router-view/>
      </div>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
   // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>



<style>
.parallax {
  /* The image used */
  background-image: url("./assets/images/background.jpg");

  /* Set a specific height */

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
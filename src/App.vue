<template>
  <div style="background-color:rgb(200,200,200);"> 

      <div style="margin-left:8%;margin-right:8%;">
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
  background-color: rgb(237,237,237);

  /* Set a specific height */

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
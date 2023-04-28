<template>
  <Navbar></Navbar>
 <aboutMeVue></aboutMeVue>
 <projects></projects>
 <Achievements/>
 <contactVue/>
 <!-- <router-view></router-view> -->
 <div style="margin: 80px;font-size: large;font-weight: bolder; ">: <a :href="linkUrl">👉{{ text }}</a></div>
</template>

<script>
import aboutMeVue from './components/aboutMe.vue';
import Navbar from './components/Navbar.vue';
import projects from './components/projects.vue';

import Achievements from './components/Achievements.vue';
import contactVue from './components/contact.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    aboutMeVue,
    projects,
    contactVue,
    Achievements
  },data(){
    return{
      text:"Check out my Resume",
      linkUrl:"https://drive.google.com/file/d/1huZUATS73y_R9-vyNJP0UHbaAqcBeBe4/view?usp=sharing"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: black; */
  /* background-color: black; */
  
}
</style>


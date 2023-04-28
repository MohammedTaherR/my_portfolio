// router.js
import { createRouter, createWebHistory } from 'vue-router';
import aboutMeVue from './components/aboutMe.vue';
import projects from './components/projects.vue';
import contactVue from './components/contact.vue';
import Achievements from './components/Achievements.vue';

const routes = [
 
  {
    path: '/',
    name: 'aboutMe-section',
    component: aboutMeVue
  },
  {
    path: '/projects',
    name: 'Projects',
    component: projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: contactVue
  }
  ,
  {
    path: '/Achievements',
    name: 'Achievements',
    component: Achievements
  }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: function (to) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    },
  })
export default router;
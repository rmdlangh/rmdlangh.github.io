import Vue from 'vue'
import Router from 'vue-router'
import VueDemo from '@/components/VueDemo'
import Messages from '@/components/Messages'
import cvDemo from '@/components/cvDemo'
import Projects from '@/components/Projects'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: VueDemo
    },*/
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/projects',
      name: 'projects_list',
      component: Projects
    },
    {
      path: '/cirriculumvitae',
      name: 'cv',
      component: cvDemo
    },
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/vuedemo',
      name: 'vd',
      component: VueDemo
    }
  ]
})

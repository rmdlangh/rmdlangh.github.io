import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages'
import projects from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages,
    projects
  }
})
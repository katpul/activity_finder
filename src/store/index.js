import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    projects: []
  },
  getters: {
    projects: state => state.projects,
  },
  mutations: {
    setProjects(state, data) {
      let pushEvent = data.filter(x => x.type === 'PushEvent')
        
      const latestProjects = [];

      pushEvent.forEach(function(item) {
        let existing = latestProjects.filter(function(v) {
          return v.repo.name == item.repo.name;
        });
        if (existing.length) {
          let existingIndex = latestProjects.indexOf(existing[0]);
          latestProjects[existingIndex].payload.commits = latestProjects[existingIndex].payload.commits.concat(item.payload.commits);
        } else {
          if (typeof item.payload.commits == 'string')
            item.payload.commits = [item.payload.commits];
          latestProjects.push(item);
        }
      });
      state.projects = latestProjects
    },
    clearProjects(state){
      state.projects = []
    }
  },
  actions: {
    async getProjects({commit}, id) {
      const req =  fetch(`https://api.github.com/user/${id}/events`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      try {
        const res = await req
        if (!res.ok) {
          throw await res.json()
      }
      const response = await res.json()
      commit('setProjects', response)
      return 
      } catch (err) {
        commit('clearProjects')
        throw err
      }            
    },
  }
})
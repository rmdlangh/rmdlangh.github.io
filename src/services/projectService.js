import api from '@/services/api'

export default {
  fetchProjects() {
    return api.get(`projects/`)
              .then(response => response.data)
  }
}
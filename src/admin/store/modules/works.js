import {packWorkToFormData} from '@/helpers/formDataPack';


export default {
    namespaced: true,
    state: {
        works: []
    },
    mutations: {
        SET_WORK: (state, work) => {
            state.works.push(work);
        },
        SET_ALL_WORKS: (state, works) => {
            state.works = works;
        },
        REMOVE_WORK: (state, workID) => {
            state.works = state.works.filter(work => work.id !== workID)
        },
        EDIT_WORK: (state, editedWork) => {
            state.works = state.works.map(work => work.id === editedWork.id ? editedWork : work);
        }
    },
    actions: {        
        async addWork({commit}, work) { 
            try {
                const response = await this.$axios.post('/works', packWorkToFormData(work));
                commit('SET_WORK', response.data); 
                               
                return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }     
        },
        
        async fetchWorks({commit, rootGetters}) {            
            try {
                const userId = rootGetters['user/userId'];
                const response = await this.$axios.get(`/works/${userId}`);
                commit('SET_ALL_WORKS', response.data.reverse()); 
                return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }     
        },

        async removeWork({commit}, worksId) {
            try {
              const response = await this.$axios.delete(`/works/${worksId}`);
              commit('REMOVE_WORK', worksId); 
              return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }
        },
        
        async editWork({commit}, editedWork) {
            try {   
                const response = await this.$axios.post(`/works/${editedWork.id}`, packWorkToFormData(editedWork));
                commit('EDIT_WORK', response.data.work); 

                return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }
        }
    }, 
    getters: {        
        getWorks: state => {
            return state.works;
        }
    }
}
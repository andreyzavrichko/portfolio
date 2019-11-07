export default {
    namespaced: true, 
    
    state: {
        categories: []
    },
    mutations: { 
        SET_CATEGORIES: (state, categories) => {
            state.categories = categories;
        },
        REMOVE_CATEGORY: (state, categoryId) => {
            state.categories = state.categories.filter(category => category.id !== categoryId)
        },
        EDIT_NAME_CATEGORY: (state, editedCategory) => {
            state.categories = state.categories.map(category => category.id !== editedCategory.id ? category : editedCategory)
        }
    },
    actions: {
        
        async addNewSkillGroup({commit}, groupTitle) {             
            try {                
                const response = await this.$axios.post('/categories', {
                    title: groupTitle
                });                
                return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }     
        },
        
        async fetchCategories({commit}) {            
            try {
                const response = await this.$axios.get('/categories');
                commit('SET_CATEGORIES', response.data.reverse()); 
                return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }     
        },
        
        async removeCategory({commit}, categoryId) {
            try {
              const response = await this.$axios.delete(`/categories/${categoryId}`);
              commit('REMOVE_CATEGORY', categoryId); 
              return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }
        },
        
        async editNameCategory({commit}, category) {
            try {
              const response = await this.$axios.post(`/categories/${category.id}`, {
                title: category.category
              });
              
              commit('EDIT_NAME_CATEGORY', category); 
              return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }
        }
    }

}
export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        CLEAR_USER: (state) => {
            state.user = {}
        }
    },
    actions: {
        logout({commit}) {
            localStorage.removeItem('token');
            commit('CLEAR_USER');
        }
    },
    getters: { 
        userIsLogged: state => { 
            const userObj = state.user; 
            const userObjIsEmpty =                 
                Object.keys(userObj).length === 0 && userObj.constructor === Object;
            return userObjIsEmpty === false; 
        },
        userId: (state) => {
            return state.user.id;
          },
    }
}
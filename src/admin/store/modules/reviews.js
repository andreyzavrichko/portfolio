import { packReviewToFormData } from '@/helpers/formDataPack';
import {CONSTS} from '../../../helpers/consts';

export default {
    namespaced: true,
    state: {
        reviews: []        
    },
    mutations: {
        SET_REVIEW: (state, review) => {
            state.reviews.push(review);
        },
        SET_ALL_REVIEWS: (state, reviews) => {
            state.reviews = reviews;
        },
        REMOVE_REVIEW: (state, reviewID) => {
            state.reviews = state.reviews.filter(review => review.id !== reviewID)
        },
        EDIT_REVIEW: (state, editedReview) => {
            state.reviews = state.reviews.map(review => review.id === editedReview.id ? editedReview : review);
        }
    },
    actions: {        
        async addReview({commit}, review) { 
            try {
                const response = await this.$axios.post('/reviews', packReviewToFormData(review));
                commit('SET_REVIEW', response.data); 
                               
                return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }     
        },
        
        async fetchReviews({commit, rootGetters}) {             
            try {
                const userId = rootGetters['user/userId'];
                const response = await this.$axios.get(`/reviews/${userId}`);
                commit('SET_ALL_REVIEWS', response.data.reverse()); 
                return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }     
        },
        
        async removeReview({commit}, reviewId) {
            try {
              const response = await this.$axios.delete(`/reviews/${reviewId}`);
              commit('REMOVE_REVIEW', reviewId); 
              return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }
        },
       
        async editReview({commit}, editedReview) {
            try {
                const response = await this.$axios.post(`/reviews/${editedReview.id}`, packReviewToFormData(editedReview));
                commit('EDIT_REVIEW', response.data.review); 
                
                return response;
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }
        }
    }, 
    getters: {        
        getReviews: state => {
            return state.reviews;
        }
    }
}
import Vue from 'vue';
import Flickity from 'vue-flickity';
import axios from 'axios';
import {CONSTS} from '../helpers/consts';

new Vue({
    el:"#review",
    template:"#reviews__template",

    components: {
        Flickity
    },

    data () {
        return {
            flickityOptions: {
               
                prevNextButtons: false,
                pageDots: false,
               
                groupCells: window.screen.width > 948 ? 2 : 1,
                
            },
            reviews: {},
            baseURL: CONSTS.BASEURL
        }
    },

    async created() {      
        const items = await axios.get(CONSTS.BASEURL+'reviews/'+CONSTS.MY_USER_ID)
            .then(response => {
                this.reviews = { ...response.data };
            });          
    },

    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    }
});



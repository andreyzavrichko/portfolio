import Vue from 'vue';
import axios from 'axios';
import {CONSTS} from '../helpers/consts';


const skillItem = {
    template: "#skill",
    props: {    
        skill: Object
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs['color-circle']; 
            const dashArray = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dasharray'));

            const percent = dashArray / 100 * (100 - this.skill.percent);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() { 
        this.drawColoredCircle();
    }
}


const skillsRow = {
    template: "#skills-row",
    components: { 
        skillItem
    },

    props: {            
        skillList: Object,
        group: Object
    },

    computed: {
        getNameSkill() {
            return {}
        }
    }
}

new Vue({
    el: "#skills-component",    
    template: "#skills-list",   
    components: {   
        skillsRow
    },
    data() {    
        return {
            skillGroup: {},
            skillList: {}
        }
    },

    async created() { 
       
        const categories = await axios.get(CONSTS.BASEURL+'categories/'+CONSTS.MY_USER_ID)
            .then(response => {
                this.skillGroup = { ...response.data };
            });
        const skills = await axios.get(CONSTS.BASEURL+'skills/'+CONSTS.MY_USER_ID)
            .then(response => {
                this.skillList = { ...response.data };
            });
         
    }
})

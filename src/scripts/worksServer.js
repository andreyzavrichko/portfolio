import Vue from 'vue';
import axios from 'axios';
import {CONSTS} from '../helpers/consts';

const tags = {
    template: "#slider-tags",
    props: {
        tagsArray: Array
    }
};

const thumbs = {
    template: "#slider-thumbs",
    props: { 
        works: Array,
        currentWork: Object
    },
    computed: {
        splicedWorks() {
            return window.screen.width < 1200 ? [...this.works].splice(0,3) : this.works;         
        }
    },
    data() {
        return {
            baseURL: CONSTS.BASEURL
        }
    }
};

const btns = {
    template: "#slider-btns"
};


const display = {
    template: "#slider-display",
    components: {
        btns,   
        thumbs    
    },
    props: {   
        works: Array,  
        currentWork: Object,
        currentIndex: Number
    },
    computed: {
        
        reversedWorks() {
            const works = [...this.works]; 
            return works.reverse();
        }
    },
    data() {
        return {
            baseURL: CONSTS.BASEURL
        }
    }
};


const info = {
    template: "#slider-info",
    components: {
        tags    
    },
    computed: {
        tagsArray() {
            return this.currentWork.techs.split(',');
        }
    },
    props: {
        currentWork: Object
    }
};


new Vue ({
    el:"#slider-component",  
    template: "#slider-container", 
    components: {
        display,    
        info    
    },
    data() {   
        return {
            works: [],   
            currentIndex: window.screen.width < 1200 ? 1 : 0,
            idArray: []
        }
    },
    computed: { 
        
        currentWork() { 
            return this.works[this.currentIndex];
        }
    },
    watch: { 
        currentIndex(value) {
            this.makeInfiniteLoopForCurrentIndex(value);
        }
    },
    methods: { 
        makeInfiniteLoopForCurrentIndex(value) {
            const worksAmount = this.works.length - 1; 
            if (value > worksAmount) this.currentIndex = 0; 
            if (value < 0) this.currentIndex = worksAmount;
        },
        
        handleSlide(direction) {
            switch (direction) {
                case 'next':                   
                    
                    this.currentIndex++;
                    break;
                case 'prev':
                    
                    this.currentIndex--;
                    break;
            }
        },
        
        handleClickThumbs(currentIDthumbs) {
            
            let id = 0;

            this.idArray.forEach( element => {
                if (element.id === currentIDthumbs) {
                    id = element.index;
                    return;
                }
            });

            this.currentIndex = id;
            
        }
    },
    async created() { 
        const worksGroup = await axios.get(CONSTS.BASEURL+'works/'+CONSTS.MY_USER_ID)
            .then(response => {
                this.works = [...response.data];
            });
            
            
            let c = 0;
            const obj = {
                index: 0,
                id: 0                
            }
            this.works.forEach(work => {               
                obj.index = c;
                c++;
                obj.id = work.id;
                this.idArray.push({...obj});
            });
    }
});
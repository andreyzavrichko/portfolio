import Vue from 'vue';

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
    }
};

const info = {
    template: "#slider-info",
    components: {
        tags    
    },
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(',');
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
            currentIndex: 0 
        };
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
        
        makeArrWithRequiredImages(data) {
            return data.map( item=>{ 
                const requiredPic = require(`../images/content/work/${item.photo}`);
                item.photo = requiredPic;

                return item;
            });
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
            this.currentIndex = currentIDthumbs-1;  
        }
    },
    created() { 
        const data = require('../data/works.json');
        this.works = this.makeArrWithRequiredImages(data);
    }
});




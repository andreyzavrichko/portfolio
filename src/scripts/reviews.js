import Vue from 'vue';
import axios from 'axios';
import flickity from 'vue-flickity';
import {CONSTS} from '../helpers/consts';

const review = {
  template: '#review',
  props: {
    author: {
      type: String,
    },
    position: {
      type: String,
    },
    photo: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};

new Vue({
  el: '#reviews-container',
  template: '#reviews-content',
  components: {
    flickity,
    review,
  },
  data() {
    return {
      reviews: {},
      currentSlideIndex: 0,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        resize: true,
        groupCells: window.innerWidth > 768 ? 2 : 1,
        cellAlign: 'left',
      },
    };
  },
  computed: {
    slidesLength() {
      return Math.ceil(this.reviews.length / this.flickityOptions.groupCells);
    },
  },
  methods: {
    goToPrevReview() {
      this.$refs.flickity.previous();
    },
    goToNextReview() {
      this.$refs.flickity.next();
    },
    setCellHeight() {
      const slides = this.$refs.flickity.getCellElements();
      slides.forEach((slide) => (slide.style.height = ''));

      const heights = slides.map((slide) => slide.offsetHeight);
      const max = Math.max(...heights);

      slides.forEach((slide) => (slide.style.height = max + 'px'));

      const viewport = document.querySelector('.flickity-viewport');
      viewport.style.height = max + 'px';
    },
    onResize() {
      this.flickityOptions.groupCells = window.innerWidth > 768 ? 2 : 1;
      this.setCellHeight();
    },
    async fetchReviews() {
      const { data: reviews } = await axios.get(CONSTS.BASEURL+'reviews/'+CONSTS.MY_USER_ID);
      this.reviews = reviews.map((item) => ({
        ...item,
        photo: `${CONSTS.BASEURL}/${item.photo}`,
      }));
    },
    async initializeSlider() {
      await this.fetchReviews();
      this.$nextTick(() => {
        this.$refs.flickity.rerender();
        this.setCellHeight();
        this.$refs.flickity.on('change', () => {
          this.currentSlideIndex = this.$refs.flickity.selectedIndex();
        });
      });
    }
  },
  created() {
    this.initializeSlider();
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
});

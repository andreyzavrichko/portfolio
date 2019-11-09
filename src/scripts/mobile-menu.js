import Vue from 'vue';

const mobileMenuBtn = document.querySelector('#mobile-nav');

const listItem = {
  template: "#list-item",
  props: {
      item: Object,
      showMenu: Boolean
  }
}


const menuMobileVue = new Vue({
  el: "#navigation_menu--mobile",
  template: "#navigation--mobile",

  components: {
      listItem
  },

  data() {    
      return {
          menuList: [
              { text: 'Главная', href: 'main' },
              { text: 'Обо мне', href: 'about' },
              { text: 'Навыки', href: 'skills' },
              { text: 'Работы', href: 'works' },
              { text: 'Отзывы', href: 'reviews' },
              { text: 'Связаться', href: 'feedback' }
          ],
          showMenu: false
      }
  },

  methods: {
      scrollToSection(href) {
          this.showMenu = false;
          const section = document.getElementById(href);
          section.scrollIntoView({ behavior: "smooth" });
      }
  }
});


const mobileMenu = document.querySelector('#menuMobile');


mobileMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  menuMobileVue.$data.showMenu = true;
});
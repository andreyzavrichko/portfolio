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
              { text: 'Главная', href: 'section_1' },
              { text: 'Обо мне', href: 'section_2' },
              { text: 'Навыки', href: 'section_3' },
              { text: 'Работы', href: 'section_4' },
              { text: 'Отзывы', href: 'section_5' },
              { text: 'Связаться', href: 'section_6' }
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
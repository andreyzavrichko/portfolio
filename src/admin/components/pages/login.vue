<template lang="pug">
  .login
    .container
      form(
        @submit.prevent="login"
      ).login__form#form
        .login__close
          button(
            @click="close"
            type="button"
          ).login__close-btn
        .login__title-box
          h1.login__title Авторизация
        .form__wrapper
          .form__row           
            label.form__elem(data-text="Логин")
              .form__elem-container(
                :class="{'is-error':validation.hasError('user.name')}"
              ).form__elem-container--user
                input(
                  v-model="user.name"
                  type="text" 
                  placeholder="Ваше имя" 
                ).form__elem-input
                .form__tooltip(
                  :class="{show: validation.hasError('user.name')}"
                )
                  .form__tooltip-text {{validation.firstError('user.name')}}
          .form__row
            label.form__elem(data-text="Пароль")
              .form__elem-container(
                :class="{'is-error':validation.hasError('user.password')}"
              ).form__elem-container--key
                input(
                  v-model="user.password"
                  type="password" 
                  placeholder="Пароль"
                ).form__elem-input
                .form__tooltip(
                  :class="{show: validation.hasError('user.password')}"
                )
                  .form__tooltip-text {{validation.firstError('user.password')}}
          .form__row
            label.form__elem.form__elem--button
              button(                
                :class="{disabled: disabledProp}"
                :disabled="disabledProp"
                type="submit"
              ).form__elem-button Отправить
</template>

<script>
import $axios from "@/requests";
import { mapActions } from "vuex";
import { good, bad } from "@/helpers/tooltipDispath";
import { Validator } from 'simple-vue-validator';

export default {
  mixins: [require('simple-vue-validator').mixin],

  validators: {
    'user.name'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'user.password'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    }
  },

  data() {
    return {
      user: {
        name: "zavrichko-112019",
        password: "JKnm54fdms"
      },
      
      disabledProp: false
    }
  },

  methods: {
    ...mapActions("tooltip", ["showTooltip", "setColTooltip", "closeTooltip"]),
    
    
    async login() {
      if ((await this.$validate()) === false) return;
      this.disabledProp = true;

      try {       
        const {
          data: {token}
        } = await $axios.post('/login', this.user);        
        localStorage.setItem('token', token);        
        $axios.defaults.headers['Authorization'] = `Bearer ${token}`;        
        this.$router.replace('/');
        this.disabledProp = false;
        good(this, "Успешный вход");
      } catch (error) {
        this.disabledProp = false;
        bad(this, error);
      }      
    },

    close() {
      location.href = (localStorage.getItem('homePage')); 
    }

  }
}
</script>

<template lang="pug">
  .login
    .container
      form.login__form#form(@submit.prevent="signIn")
        .login__close
          button(type="button").login__close-btn(@click="exitFromAdmin")
        .login__title-box
          h1.login__title Авторизация
        .form__wrapper-login
          .form__row           
            label.form__elem(data-text="Логин") 
              .form__elem-container.form__elem-container--user
                input(
                  v-model="name" 
                  :error-mesage="validation.firstError('name')"                  
                  ).form__elem-input                  
                .form__tooltip 
                  .form__tooltip-text 
          .form__row
            label.form__elem(data-text="Пароль") 
              .form__elem-container.form__elem-container--key
                input(
                  v-model="password"                   
                  type="password" 
                  :error-mesage="validation.firstError('password')"
                  ).form__elem-input
                .form__tooltip
                  .form__tooltip-text 
          .form__row
            label.form__elem.form__elem--button
              button(type="submit" :disabled="isLoading").form__elem-button Отправить
</template>

<script>
import Vue from "vue";
import axios from "axios";
import SimpleVueValidation from "simple-vue-validator";
import BasicInput from './BasicInput.vue';
import BasicButton from './BasicButton.vue';

Vue.use(SimpleVueValidation);
const Validator = SimpleVueValidation.Validator;

export default {
  mixins: [SimpleVueValidation.mixin],
  data() {
    return {
      name: "",
      password: "",
      isLoading: false      
    };
  },
  validators: {
    name: function(value) {
    return Validator.value(value).required("Заполните логин");  
    },
    password: function(value) {
    return Validator.value(value).required("Введите пароль").minLength(4, "минимум 4 символа");  
    },
  },
  methods: {
    signIn() {
      this.$validate().then(success => {
        if (success) {
          this.login();
        }
      });
    },
    login() {
      this.isLoading = true;
      axios
        .post("https://webdev-api.loftschool.com/login", { 
          name: this.name,
          password: this.password
          })
          .then(() => {
            alert("OK");
          })
          .catch(e => {
            alert(e.response.data.error);         
          });   
          this.password = "";
          this.isLoading = false;   
    },
    exitFromAdmin() {
      location.href = "https://andreyzavrichko.github.io/portfolio";
   },
  },
};  
</script>

<style lang="postcss">
@import '../../styles/mixins.pcss';
.login {
    background-image: url('../../images/content/bg/mountain-baloon.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    & .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 100vw;
        height: 100vh;

        background-color: rgba($text-color, .7);

        

        & .login__form {
            position: relative;

            max-width: 565px;
            background-color: $white-color;
            padding: 60px;

            @include phones {
                width: 100%;
                padding: 30px;
            }
        }

        & .login__title {
            font-size: 36px;
            font-weight: $semi-bold;
            text-align: center;

            margin-bottom: 40px;

            @include phones {
                font-size: 30px;
            }
        }

        .form__row {
            margin-bottom: 40px;

            &:last-child {
                margin-bottom: 0;
                text-align: center;
            }
        }

        & .form__elem-input {
            width: 100%;
        }

        & .form__elem {

            &:before {
                content: attr(data-text);
                display: block;
                font-size: 16px;
                font-weight: $semi-bold;
                color: rgba($light-color, 0.3);

                padding-left: 49px;
            }

            &:last-child:before {
                display: none;
            }

            & .form__elem-container {
                display: flex;

                border-bottom: 2px solid rgba(black, .7);
            }

            @each $icon in (user, key) {
                .form__elem-container--#{$icon}:before {
                    content: "";
                    display: block;
                    width: 30px;
                    height: 30px;
                    background: svg-load('#{$icon}.svg', fill=rgba($text-color, 0.9), width=30px, height=30px) center center no-repeat / contain;
                    padding-bottom: 4px;
                    padding-right: 20px;
                    
                }
                
            }
        }

        & .form__elem-input {
            margin: 0;
            border-bottom: none;

            &::placeholder {
                color: black;
                font-size: 18px;
                font-weight: $bold;
            }
        }
    }  

    .form__elem--button {
        padding: 0 45px;

        @include tablets {
            display: flex;
            justify-content: center;
        }
    }

    .form__elem-button {
        width: 347px;
        background-image: linear-gradient(to right, $linear-startcolor, $linear-endcolor);

        color: $white-color;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: $bold;

        padding: 28px 0;

        border-radius: 30px 5px;

        &:hover {
            background-image: linear-gradient(to right, $linear-startcolor-hover, $linear-endcolor-hover);
        }

        @include desktop {
            width: 352px;
            padding: 33px 0;
        }

        @include phones {
            padding: 19px 0;
            width: 260px;
        }
    }
}
.login__close {
    position: absolute;
    right: 30px;
    top: 30px;
}

.login__close-btn {
    width: 20px;
    height: 20px;
    background: svg-load('cross.svg', fill=rgba(black, .7)) center center no-repeat / contain;
}


</style>
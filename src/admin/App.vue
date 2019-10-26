<template lang="pug">
  .wrapper.wrapper--admin    
    .login
      .container
        form.login__form#form
          .login__close
            button(type="button").login__close-btn
          .login__title-box
            h1.login__title Авторизация
          .form__wrapper
            .form__row           
              label.form__elem(data-text="Логин")
                .form__elem-container.form__elem-container--user
                  input(type="text" placeholder="Terminator_2000").form__elem-input
                  .form__tooltip
                    .form__tooltip-text 
            .form__row
              label.form__elem(data-text="Пароль")
                .form__elem-container.form__elem-container--key
                  input(type="password" placeholder="••••••••••").form__elem-input
                  .form__tooltip
                    .form__tooltip-text 
            .form__row
              label.form__elem.form__elem--button
                button(type="submit").form__elem-button Отправить
    header.header
      .container
        .header__wrapper
          .header__logo
            .header__avatar
              .avatar
                .avatar__block                
                  img(src='../images/content/user.jpg' alt="Аватар").avatar__image
            .header__block
              .header__name
                h1.header__name-title Андрей Завричко
              .header__text-box
                .header__typepanel
                  p Панель администрирования
                .header__quit
                  a.header__quit-link Выйти
    .main-menu
      nav.menu
        ul.menu__list
          - var menuList = ['Обо мне', 'Работы', 'Отзывы'];
          - for (var i=0; i<menuList.length; i++)
            li.menu__item
              a(href="#" title=`${menuList[i]}`).menu__link #{menuList[i]}                       
</template>

<script></script>



<style lang="postcss">
@import "./styles/main.pcss";
</style>
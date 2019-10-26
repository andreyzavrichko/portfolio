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
    
    main.maincontent.maincontent--admin               

      section.about
        .container
          .about__title
            .title
              h2.title Блок «Обо мне»
            .about__button-add
              button(type="button").button.button--add +
              button(type="button").about__button Добавить группу
          .groups
            ul.groups__list
              li.groups__item.groups__item--addgroup 
                  form.form
                    .form__wrapper
                      .form__header
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Название новой группы").form__elem-input
                            .form__elem-btns
                              button(type="button").button.button--apply
                              button(type="button").button.button--discard 
                      .form__footer
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Новый навык").form__elem-input
                            .form__elem-percent
                              input(type="number" min="0" max="100" placeholder="100" value="100").form__elem-input
                            button(type="button").button.button--add +
              -
                var skillsList = [
                    [
                      {type: "Workflow"},
                      [{text:"Git", value:"100"}, {text:"Terminal", value:"90"}, {text:"Gulp", value:"80"}, {text:"Webpack", value:"85"}]
                    ],
                    [
                      {type: "Frontend"},
                      [{text:"HTML5", value:"100"}, {text:"CSS", value:"90"}, {text:"JavaScript", value:"80"}, {text:"Jquery и Vue.js", value:"85"}]
                    ]
                  ];            
              each skill in skillsList
                li.groups__item.groups__item--group
                  form.form
                    .form__wrapper
                      .form__header
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Название новой группы" value=`${skill[0].type}`).form__elem-input
                            .form__elem-btns
                              button(type="button").button.button--edit 
                      .form__container
                        label.form-elem
                          .skill
                            ul.skill__list                        
                              li.skill__item
                                table.skill__table
                                  each row in skill[1]
                                    tr.skill__table-row
                                      td.skill__name 
                                        .skill__name-input-wrapper.no-edit
                                          label.form__elem
                                            input(type="text" placeholder="Навык" value=`${row.text}` readonly).form__elem-input
                                      td.skill__value 
                                        .skill__name-input-wrapper.no-edit
                                          label.form__elem.form__elem--number
                                            input(type="number" min="0" max="100" placeholder="100" value=`${row.value}` readonly).form__elem-input                                                                           
                                      td.skill__button
                                        button(type="button").button.button--edit
                                      td.skill__button                                      
                                        button(type="button").button.button--delete  
                      .form__footer
                        label.form__elem
                          .form__elem-container
                            input(type="text" placeholder="Новый навык").form__elem-input
                            .form__elem-percent
                              input(type="number" min="0" max="100" placeholder="100" value="100").form__elem-input
                            button(type="button").button.button--add +
</template>

<script></script>



<style lang="postcss">
@import "./styles/main.pcss";
</style>
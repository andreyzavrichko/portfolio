(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{425:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form-edit form-edit--reviews"},[t._m(0),r("div",{staticClass:"form-edit__wrapper"},[r("div",{staticClass:"form-edit__left"},[r("label",{staticClass:"avatar-load"},[r("div",{staticClass:"avatar-load__image"},[r("input",{staticClass:"avatar-change__file",attrs:{type:"file"},on:{change:t.appendFileAndRenderPhoto}}),r("div",{staticClass:"avatar__block--reviews"},[r("div",{staticClass:"avatar__image",class:{filled:this.renderedPhotoUrl.length},style:{backgroundImage:"url("+this.renderedPhotoUrl+")"}})])]),r("div",{staticClass:"form__tooltip form__tooltip--photo",class:{"is-error":t.validation.hasError("review.photo")}},[r("div",{staticClass:"form__tooltip-text"},[t._v(t._s(t.validation.firstError("review.photo")))])]),r("div",{staticClass:"button avatar-load__button"},[t._v("Добавить фото ")])])]),r("div",{staticClass:"form-edit__right"},[r("form",{staticClass:"form"},[r("div",{staticClass:"form__wrapper"},[r("div",{staticClass:"form__row form__row--inputs"},[r("label",{staticClass:"form__elem",attrs:{"data-text":"Имя автора"}},[r("div",{staticClass:"form__elem-container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.review.author,expression:"review.author"}],staticClass:"form__elem-input",attrs:{type:"text"},domProps:{value:t.review.author},on:{input:function(e){e.target.composing||t.$set(t.review,"author",e.target.value)}}}),r("div",{staticClass:"form__tooltip",class:{"is-error":t.validation.hasError("review.author")}},[r("div",{staticClass:"form__tooltip-text"},[t._v(t._s(t.validation.firstError("review.author")))])])])]),r("label",{staticClass:"form__elem",attrs:{"data-text":"Титул автора"}},[r("div",{staticClass:"form__elem-container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.review.occ,expression:"review.occ"}],staticClass:"form__elem-input",attrs:{type:"text"},domProps:{value:t.review.occ},on:{input:function(e){e.target.composing||t.$set(t.review,"occ",e.target.value)}}}),r("div",{staticClass:"form__tooltip",class:{"is-error":t.validation.hasError("review.occ")}},[r("div",{staticClass:"form__tooltip-text"},[t._v(t._s(t.validation.firstError("review.occ")))])])])])]),r("div",{staticClass:"form__row form__row--textarea"},[r("label",{staticClass:"form__elem",attrs:{"data-text":"Отзыв"}},[r("div",{staticClass:"form__elem-container form__elem-container--message"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.review.text,expression:"review.text"}],staticClass:"form__elem-textarea",attrs:{type:"textarea"},domProps:{value:t.review.text},on:{input:function(e){e.target.composing||t.$set(t.review,"text",e.target.value)}}}),r("div",{staticClass:"form__tooltip form__tooltip--textarea",class:{"is-error":t.validation.hasError("review.text")}},[r("div",{staticClass:"form__tooltip-text"},[t._v(t._s(t.validation.firstError("review.text"))+"                   ")])])])])]),r("div",{staticClass:"form__row form__row--btns"},[r("label",{staticClass:"form__elem",attrs:{"data-text":""}},[r("div",{staticClass:"form__elem-container"},[r("button",{staticClass:"button button--cancel",attrs:{type:"button"},on:{click:t.cancelAddNewGroup}},[t._v("Отмена")]),r("button",{staticClass:"button button--save",attrs:{type:"submit"},on:{click:t.addNewReview}},[t._v("Сохранить")])])])])])])])])])};a._withStripped=!0;var i=r(14),o=r(51),s=r(44);function n(t,e,r,a,i,o,s){try{var n=t[o](s),l=n.value}catch(t){return void r(t)}n.done?e(l):Promise.resolve(l).then(a,i)}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={mixins:[r(51).mixin],validators:{"review.author":function(t){return o.Validator.value(t).required("Поле не должно быть пустым")},"review.occ":function(t){return o.Validator.value(t).required("Поле не должно быть пустым")},"review.photo":function(t){return o.Validator.value(t).required("Изображение не должно быть пустым")},"review.text":function(t){return o.Validator.value(t).required("Поле не должно быть пустым")}},data:function(){return{review:{photo:"",author:"",occ:"",text:""},renderedPhotoUrl:""}},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){l(t,e,r[e])})}return t}({},Object(i.b)("reviews",["addReview"]),Object(i.b)("tooltip",["showTooltip","setColTooltip","closeTooltip"]),{cancelAddNewGroup:function(){this.$emit("cancelAddNewGroup")},appendFileAndRenderPhoto:function(t){var e=this,r=t.target.files[0];if(this.review.photo=r,r){var a=new FileReader;try{if("image/png"!==r.type&&"image/jpeg"!==r.type)throw new Error("Для загрузки используйте файлы изображений (PNG, JPG)");if(r.size/1024/1024>1.5)throw new Error("Загружаемый файл больше 1.5 Мб");a.readAsDataURL(r),a.onload=function(){e.renderedPhotoUrl=a.result}}catch(t){Object(s.a)(this,t)}}},addNewReview:function(){var t,e=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$validate();case 2:if(t.t0=t.sent,!1!==t.t0){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,this.addReview(this.review);case 8:Object(s.b)(this,"Отзыв успешно загружен"),this.$emit("addNewReview"),t.next=15;break;case 12:t.prev=12,t.t1=t.catch(5),Object(s.a)(this,t.t1);case 15:case"end":return t.stop()}},t,this,[[5,12]])}),function(){var e=this,r=arguments;return new Promise(function(a,i){var o=t.apply(e,r);function s(t){n(o,a,i,s,l,"next",t)}function l(t){n(o,a,i,s,l,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}()})},v=r(11),d=Object(v.a)(c,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-edit__title-box"},[e("h3",{staticClass:"form-edit__title"},[this._v("Новый отзыв")])])}],!1,null,null,null);d.options.__file="src/admin/components/reviews-add.vue";e.default=d.exports}}]);
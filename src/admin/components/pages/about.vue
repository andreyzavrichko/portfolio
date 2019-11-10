<template lang="pug">
    section.about 
        .about-page__preloader(v-if="isLoading")
          clip-loader()
        template(v-else)  
        .container
          .about__title
            .title
              h2.title Блок «Обо мне»            
            div(
              v-if="showAddingForm === false"
              @click="showAddingForm = true"
            ).about__button-add
              button(type="button").button.button--add +
              button(type="button").about__button Добавить группу
          .groups
            ul.groups__list
              li.groups__item.groups__item--addgroup(v-if="showAddingForm")
                skillsAdd(
                  @addSkillGroup="showAddingForm = false"
                  @cancelAddingSkillGroup="showAddingForm = false"           
                )              
              li.groups__item.groups__item--group(
                v-for="category in categories"
                :key="category.id"
              )
                skillsGroup(
                  :category="category"
                  :skills="filterSkillsByCategoryId(category.id)"
                )            
</template>

<script>
import { mapActions, mapState } from "vuex";
import { good, bad } from "@/helpers/tooltipDispath";
import { ClipLoader } from '@saeris/vue-spinners';



export default {
  components: {
    skillsAdd: () => import("components/skills-add.vue"),
    skillsGroup: () => import("components/skills-group.vue"),
    ClipLoader,
  },

  data() {
    return {
      showAddingForm: false,
      isLoading: false,      
    };
  },

  computed: {
    ...mapState("categories", {
      
      categories: state => state.categories
    }),
    ...mapState("skills", {
      
      skills: state => state.skills
    })
  },

  methods: {
    ...mapActions("categories", ["fetchCategories"]),
    ...mapActions("skills", ["fetchSkills"]),
    ...mapActions("tooltip", ["showTooltip", "setColTooltip", "closeTooltip"]),

    
    filterSkillsByCategoryId(categoryId) {
      
      return this.skills.filter(skill => skill.category === categoryId);
    }
  },
  
  async created() {
  this.isLoading = true;  
    try {
      await this.fetchCategories();
      
    } catch (error) {
      bad(this, error);
    } finally {
        this.isLoading = false;
      }

    try {
      await this.fetchSkills();
      
    } catch (error) {
      bad(this, error);
    }    finally {
        this.isLoading = false;
      }   
  }   
};
</script>
<style lang="postcss" scoped>
.about-page__preloader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
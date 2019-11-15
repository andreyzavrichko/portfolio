<template lang="pug">
    section.works
      .works-page__preloader(v-if="isLoading")
        clip-loader()
      template(v-else)
      .container
        .works__title
          .title
            h2.title Блок «Работы»  
        works-add(
          v-if="showAddingForm === true"
          @cancelAddNewGroup="cancelAddNewGroupForm" 
          @addNewWork="addNewWork"          
        )
        works-edit(
          v-if="showEditingForm === true"
          @cancelEditGroup="cancelEditExistedGroupForm" 
          :workEditedById="workEditedById" 
          @editExistedWork="editExistedWork"             
        )          

        .works__listwrapper
          ul.works__list 
            works-add-button(
              @addNewWorkGroup="addNewWorkGroupForm"
            )                         
            works-group(
              v-for="work in works"
              :key="work.id"
              :work="work"      
              @editWorkGroup="editExistedWorkGroupForm"                          
            )
</template>


<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { good, bad } from "@/helpers/tooltipDispath";
import { ClipLoader } from '@saeris/vue-spinners';

export default {
  components: {
    worksEdit: () => import("components/works-edit.vue"),
    worksAdd: () => import("components/works-add.vue"),
    worksGroup: () => import("components/works-group.vue"),
    worksAddButton: () => import("components/works-addButton.vue"),
    ClipLoader
  },
  data() {
    return {
      showAddingForm: false,
      showEditingForm: false,
      workEditedById: {},
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters("works", ["getWorks"]),
    ...mapState("works", {      
      works: state => state.works
    })
  },
  async created() { 
    this.isLoading = true;   
    try {
      await this.fetchWorks();
      
    } catch (error) {
      bad(this, error);
    }finally {
        this.isLoading = false;
      }
  },
  methods: {
    ...mapActions("works", ["fetchWorks"]),
    ...mapActions("tooltip", ["showTooltip", "setColTooltip", "closeTooltip"]),

    addNewWorkGroupForm() {
      this.showAddingForm = true;
      this.showEditingForm = false;
    },
    cancelAddNewGroupForm() {
      this.showAddingForm = false;
    },
    editExistedWorkGroupForm(work_ID) {
      this.showAddingForm = false;
      this.showEditingForm = true;
      this.works.forEach(item => {
        if (item.id === work_ID) {
          this.workEditedById = item;
        }
      });
    },
    cancelEditExistedGroupForm() {
      this.showEditingForm = false;
    },

    addNewWork() {
      this.showAddingForm = false;
    },
    editExistedWork(work) {
      this.showEditingForm = false;
    }
  }
};
</script>
<style lang="postcss" scoped>
.works-page__preloader {
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
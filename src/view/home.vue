<template>
  <div id="home"
       v-on:click="clickHomeContentFunc">
    {{WelcomeMsg}}

    <vuetable ref="vuetable"
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="fields"
              pagination-path=""
              @vuetable:pagination-data="onPaginationData"
              class="table table-hover"></vuetable>
    <vuetable-pagination ref="pagination"
                         @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
  </div>
</template>
<script>
import vuetable from "vuetable-2";
import VuetablePagination from "../../node_modules/vuetable-2/src/components/VuetablePagination.vue";

export default {
  data() {
    return {
      WelcomeMsg: "Welcome to home!",
      fields: [
        "name",
        "email",
        {
          name: "birthdate",
          titleClass: "text-center",
          dataClass: "text-center"
        },
        {
          name: "nickname"
        },
        {
          name: "gender",
          titleClass: "center aligned",
          dataClass: "center aligned",
          callback: "genderLabel"
        },
        {
          name: "salary"
        }
      ]
    };
  },

  components: {
    vuetable,
    VuetablePagination
  },

  props: {},

  methods: {
    clickHomeContentFunc: function() {
      this.WelcomeMsg = "Click home content";
    },
    genderLabel(value) {
      return value === "M"
        ? '<span class="badge badge-primary">Male</span>'
        : '<span class="badge badge-danger">Female</span>';
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    }
  }
};
</script>
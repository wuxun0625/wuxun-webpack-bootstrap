<template>
	<div id="home"
       v-on:click="clickHomeContentFunc">
		{{WelcomeMsg}}

      <vuetable ref="vuetable"
                api-url="https://vuetable.ratiw.net/api/users"
                :fields="['name', 'email', 'birthdate']"
      class="table table-hover"></vuetable>



	</div>
</template>
<script>
import vuetable from 'vuetable-2';

export default {
  data() {
    return {
      WelcomeMsg: "Welcome to home!"
    };
  },

  components: {
    vuetable
  },

  props: {},

  methods: {
    clickHomeContentFunc: function() {
      this.WelcomeMsg = "Click home content";
    }
  }
};
</script>
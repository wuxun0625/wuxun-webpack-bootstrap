<template>
	<div id="home"
       v-on:click="clickHomeContentFunc">
		{{WelcomeMsg}}
	</div>
</template>
<script>
export default {
  data() {
    return {
      WelcomeMsg: 'Welcome to home!'
    };
  },

  props: {},

  methods: {
    clickHomeContentFunc: function () {
      this.WelcomeMsg = "Click home content"
    }
  }
};
</script>
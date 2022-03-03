<template>
	<div class="row logout">
		<div class="col text-center">
			<button type="button" class="btn btn-danger" @click="logoutUser">Logout</button>
		</div>
	</div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'LogoutComponente',

  methods: {

    ...mapActions([
      'logout',
    ]),

    logoutUser() {
      this.logout();
      this.$router.push({ path: '/login' });
    },
  },
};
</script>

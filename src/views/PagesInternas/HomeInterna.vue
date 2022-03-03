<template>
  <div class="homeInterna row justify-content-center">
    <div class="col-md-4 col-lg-4">
      <h1>Bem-víndo</h1>
      <p class="text-start"><b>Usuário:</b> {{user.name}}</p>
      <p class="text-start"><b>Email:</b> {{user.email}}</p>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Componente-Register',

  computed: {

    ...mapState({
      user: (state) => state.auth.me,
    }),

  },
};

</script>

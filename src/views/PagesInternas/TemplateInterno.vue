<template>
  <div id="nav">

    <navigation-bar />
    <logout />

    <!--
      <router-view>: serve para Renderizar os Componentes relacionados às Rotas
      Renderiza o Componenete relacionado a URL atual da respectiva Rota.
    -->
    <router-view/>

  </div>
</template>

<script>

import NavigationBar from './_Partials/NavigationBar.vue';
import Logout from './_Partials/Logout.vue';

export default {
  name: 'ComponenteTamplateInterno',

  components: { NavigationBar, Logout },

};

</script>

<template>
  <div class="mt-2">

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="listagemProdutos" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Produtos</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="cadastarProdutos" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cadastrar Produto</button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="listagemProdutos">
        <ListaProdutos />
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="cadastarProdutos">
      <CadastrarProduto />
      </div>
    </div>

  </div>
</template>

<script>

import CadastrarProduto from './CadastrarProduto.vue';
import ListaProdutos from './ListaProdutos.vue';

export default {
  name: 'ComponenteProdutos',

  components: { CadastrarProduto, ListaProdutos },

};

</script>

<style scoped>

</style>

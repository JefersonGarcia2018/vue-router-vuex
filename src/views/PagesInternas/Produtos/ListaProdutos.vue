<template>
  <div class="mt-2">

    <h1 class="container bg-warning text-center my-2">Listagem dos Produtos</h1>

    <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead class="table-dark" v-if="listaProdutos.length == 0">
      </thead>

      <thead class="table-dark" v-else>
        <tr>
          <th scope="col">#</th>
          <th class="text-start" scope="col">Descrição</th>
          <th scope="col">Quantidae</th>
          <th scope="col">Valor</th>
          <th scope="col">Localização</th>
          <th scope="col">#</th>
          <th scope="col">#</th>
        </tr>
      </thead>

      <tbody v-if="listaProdutos.length == 0">
        Não há produtos para listar. Cadastre os produtos.
      </tbody>
      <tbody v-else>
        <tr v-for="(produto, index) in listaProdutos">
          <th scope="row">{{++index}}</th>
          <td class="text-start">{{produto.descricao}}</td>
          <td>{{produto.qtd}}</td>
          <td>{{produto.valor}}</td>
          <td>{{produto.localizacao}}</td>
          <td>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" :data-bs-target="'#modal'+index">Editar</button>
          </td>
          <td>
            <button type="button" @click="excluir(index-1)" class="btn btn-dark">Excluir</button>
          </td>

          <!-- Início Modal -->
          <div class="modal fade" :id="'modal'+index" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-warning">
                  <h5 class="modal-title" id="staticBackdropLabel">Editar Produto</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div :id="'modal-body'+index" class="modal-body">

              <FormEditarProduto :dadosForm="[produto.descricao, produto.qtd, produto.valor, produto.localizacao]" :indice="index-1"></FormEditarProduto>

                </div>

              </div>
            </div>
          </div>
          <!-- Fim Modal -->

        </tr>
      </tbody>

    </table>
  </div>

  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import FormEditarProduto from './FormEditarProduto.vue';

export default {
  name: 'ComponenteListaProdutos',

  components: { FormEditarProduto },

  data() {
    return {

      formData: {
        descricao: '',
        qtd: '',
        valor: '',
        localizacao: '',
      },

    };
  },

  computed: {

    ...mapState({
      listaProdutos: (state) => state.produtos.produtos,
    }),

  },

  methods: {

    ...mapActions([
      'excluirProduto',
    ]),

    excluir(index) {
      this.excluirProduto(index);
    },

  },

};

</script>

<style scoped>

.container {
  max-width: 960px;
}

</style>

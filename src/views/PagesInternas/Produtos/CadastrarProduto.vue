<template>
  <div id="cadastrarProduto" class="text-start">

<div class="container">
  <main>

    <h1 class="bg-danger text-center text-white my-2">Cadastrar Produtos</h1>

    <div class="row justify-content-center">

      <div class="col-md-7 col-lg-8">

        <form id="formCadastroProduto" novalidate  @submit.prevent="cadastrarProduto">

          <div class="row g-3">
            <div class="col-sm-6">
              <label for="descricao" class="form-label">Descrição</label>
              <input type="text" v-model="formData.descricao" class="form-control" id="descricao" placeholder="" required>
              <div class="invalid-feedback">
                Preenchimento obrigatório.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="qtd" class="form-label">Quantidade</label>
              <input type="text" v-model="formData.qtd" class="form-control" id="qtd" placeholder="" required>
              <div class="invalid-feedback">
                Preenchimento obrigatório
              </div>
            </div>
          </div>

          <div class="row g-3 mt-3">
            <div class="col-sm-6">
              <label for="valor" class="form-label">Valor</label>
              <input type="text" v-model="formData.valor" class="form-control" id="valor" placeholder="" required>
              <div class="invalid-feedback">
                Preenchimento obrigatório.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="localizacao" class="form-label">Lacalização no estoque</label>
              <input type="text" v-model="formData.localizacao" class="form-control" id="localizacao" placeholder="" required>
              <div class="invalid-feedback">
                Preenchimento obrigatório
              </div>
            </div>
          </div>

          <hr class="my-4">

          <div v-if="msgSucesso" class="alert alert-success alert-dismissible fade show" role="alert">
            Produto cadastrado com sucesso.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <button class="btn btn-outline-info" type="submit">Cadastar</button>
        </form>
      </div>
    </div>
  </main>

</div>

  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'ComponenteCadastrarProduto',

  data() {
    return {

      formData: {
        descricao: '',
        qtd: '',
        valor: '',
        localizacao: '',
      },

      msgSucesso: false,

    };
  },

  methods: {

    ...mapActions([
      'cadastrar',
    ]),

    cadastrarProduto() {
      // Capturando o Formulário
      const form = document.getElementById('formCadastroProduto');

      // Se houver algum campo do Formulário não preenchido, ou preenchido incorretamente, ou seja: algum campo não-válido, então entra neste if.
      if (form.checkValidity() === false) {
        // Adicionando ao <form> a class="was-validated" a qual acionará os elementos que possuem [class="invalid-feedback"] e deixará os campos de <input> em vermelho.
        form.classList.add('was-validated');
      } else {
        // Se Cadastro OK
        this.cadastrar(this.formData);

        this.reset();

        this.msgSucesso = true;

        setTimeout(() => this.msgSucesso = false, 4000);
      }
    },

    reset() {
      this.formData = {
        descricao: '',
        qtd: '',
        valor: '',
        localizacao: '',
      };
    },

  },

};

</script>

<style scoped>

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
  font-size: 3.5rem;
  }
}

.container {
  max-width: 960px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[id="name"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[id="email"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[id="password"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[id="password_confirmation"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-bottom: 10px;
}

</style>

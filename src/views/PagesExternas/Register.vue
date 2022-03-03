<template>
  <div id="register" class="text-center">

<div class="form-signin">

  <form id="formCadastro" novalidate  @submit.prevent="userRegister">

    <router-link to="/" class="nav-link">
    <img class="mb-4" src="@/assets/logo.png" alt="Vue logo" width="72" height="57">
    </router-link>

    <div class="row" v-if="errors.login">
      <div class="col alert alert-danger" role="alert">
        {{errors.login}}
      </div>
    </div>

    <h1 class="h3 mb-3 fw-normal">Cadastre-se</h1>

    <div class="form-floating">
      <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="name@example.com" required>
      <label class="text-dark" for="name">Nome</label>
    </div>
    <div class="form-floating">
      <input type="email" v-model="formData.email" class="form-control" id="email" placeholder="name@example.com" required>
      <label class="text-dark" for="email">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" v-model="formData.password" class="form-control" id="password" placeholder="Password" minlength="8" required>
      <label class="text-dark" for="password">Senha <span class="text-muted">(no mínimo, 8 caracteres)</span></label>
    </div>
    <div class="form-floating">
      <input type="password" v-model="formData.password_confirmation" class="form-control" id="password_confirmation" placeholder="Password_confirmation" minlength="8" required>
      <label class="text-dark" for="password_confirmation">Repita a Senha</label>
    </div>
    <div class="mb-2" style="font-size: 80%;color: #dc3545;" v-if="errors.passwordError">
      {{errors.passwordError}}
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    <p class="text-center">Já é cadastrado? <router-link to="/login">Faça Login</router-link></p>
  </form>

</div>

  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Componente-Register',

  data() {
    return {

      formData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },

      errors: {
        passwordError: '',
      },
    };
  },

  methods: {

    ...mapActions([
      'register',
    ]),

    userRegister() {
      // Capturando o Formulário
      const form = document.getElementById('formCadastro');

      // Se houver algum campo do Formulário não preenchido, ou preenchido incorretamente, ou seja: algum campo não-válido, então entra neste if.
      if (form.checkValidity() === false) {
        // Adicionando ao <form> a class="was-validated" a qual acionará os elementos que possuem [class="invalid-feedback"] e deixará os campos de <input> em vermelho.
        form.classList.add('was-validated');
      } else if (this.formData.password != this.formData.password_confirmation) {
        this.errors.passwordError = 'Os campos Senha e Repita a Senha não correspodem.';
        // document.getElementById('password_validation').classList.add('is-invalid');
      } else {
        // Se Cadastro OK
        this.register(this.formData);

        this.$router.push({ path: '/' });
      }
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

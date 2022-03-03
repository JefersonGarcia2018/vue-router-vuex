<template>
  <div id="login" class="text-center">

<div class="form-signin">

  <form id="formLogin" novalidate  @submit.prevent="userLogin">

    <router-link to="/" class="nav-link">
    <img class="mb-4" src="@/assets/logo.png" alt="Vue logo" width="72" height="57">
    </router-link>

    <div class="row" v-if="errors.login">
      <div class="col alert alert-danger" role="alert">
        {{errors.login}}
      </div>
    </div>

    <h1 class="h3 mb-3 fw-normal">Login</h1>

    <div class="form-floating">
      <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label class="text-dark" for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password" required>
      <label class="text-dark" for="floatingPassword">Senha</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    <p>Não tem cadastro? <router-link to="/register">Cadastre-se</router-link></p>
  </form>

</div>

  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Componente-Login',

  data() {
    return {

      email: '',
      password: '',

      errors: {
        login: '',
      },
    };
  },

  methods: {

    ...mapActions([
      'login',
    ]),

    userLogin() {
      // Capturando o Formulário
      const form = document.getElementById('formLogin');

      // Se houver algum campo do Formulário não preenchido, ou preenchido incorretamente, ou seja: algum campo não-válido, então entra neste if.
      if (form.checkValidity() === false) {
        // Adicionando ao <form> a class="was-validated" a qual acionará os elementos que possuem [class="invalid-feedback"] e deixará os campos de <input> em vermelho.
        form.classList.add('was-validated');
      } else { // Se tudo OK com formulário de Login.
        if (this.email == window.sessionStorage.getItem('email') && this.password == window.sessionStorage.getItem('password')) {
          this.login();
          this.$router.push({ path: '/' });
        } else {
          this.errors.login = 'Email e/ou Senha incorretos';
        }
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

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>

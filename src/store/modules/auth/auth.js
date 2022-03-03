export default {

  state: {

    me: {
      name: '',
      email: '',
    },
    authenticated: false,

  },

  mutations: {

    SET_ME(state, me) {
      state.me = me;

      state.authenticated = true;
    },

    SET_AUTHENTICATED(state, status) {
      state.authenticated = status;
    },

    LOGOUT(state) {
      state.me = {
        name: '',
        email: '',
      };

      state.authenticated = false;
    },
  },

  actions: {

    register({ commit, dispatch }, formData) {
      window.sessionStorage.setItem('name', formData.name);
      window.sessionStorage.setItem('email', formData.email);
      window.sessionStorage.setItem('password', formData.password);
      window.sessionStorage.setItem('token', true);

      dispatch('getMe');
    },

    login({ commit, dispatch }, params) {
      window.sessionStorage.setItem('token', true);

      dispatch('getMe');
    },

    getMe({ commit }) {
      const token = window.sessionStorage.getItem('token');

      // console.log(token);

      if (!token) return;

      const name = window.sessionStorage.getItem('name');
      const email = window.sessionStorage.getItem('email');

      commit('SET_ME', { name, email });
    },

    logout({ commit }) {
      window.sessionStorage.removeItem('token');
    },
  },
};

import { createStore } from 'vuex';

import auth from './modules/auth/auth.js';
import produtos from './modules/produtos/produtos.js';

export default createStore({

  modules: {
    auth,
    produtos,
  },

});

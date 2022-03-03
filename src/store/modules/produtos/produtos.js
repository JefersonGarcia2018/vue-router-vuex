export default {

  state: {

    produtos: [],

  },

  mutations: {

    SET_PRODUTO(state, arrayProdutos) {
        	state.produtos = arrayProdutos;
    },
  },

  actions: {

    	cadastrar({ commit }, produto) {
    		const arrayProdutos = [];

    		if (window.sessionStorage.getItem('arrayProdutos')) {
    			const produtos = JSON.parse(window.sessionStorage.getItem('arrayProdutos'));

		            for (const objProduto of produtos) {
          arrayProdutos.push(objProduto);
        }

        arrayProdutos.push(produto);

        window.sessionStorage.setItem('arrayProdutos', JSON.stringify(arrayProdutos));
    		} else {
    			arrayProdutos.push(produto);

        window.sessionStorage.setItem('arrayProdutos', JSON.stringify(arrayProdutos));
    		}

    		commit('SET_PRODUTO', arrayProdutos);
    },

    getProdutos({ commit }) {
        	const arrayProdutos = [];

        	if (window.sessionStorage.getItem('arrayProdutos')) {
    			const produtos = JSON.parse(window.sessionStorage.getItem('arrayProdutos'));

		        for (const objProduto of produtos) {
          arrayProdutos.push(objProduto);
        }

        commit('SET_PRODUTO', arrayProdutos);
    		} else {
    			window.sessionStorage.setItem('arrayProdutos', JSON.stringify(arrayProdutos));
    		}
    },

    editarProduto({ commit }, dados) {
        	const arrayProdutos = JSON.parse(window.sessionStorage.getItem('arrayProdutos'));

        	arrayProdutos.splice(dados.indice, 1, dados.objProduto);

      commit('SET_PRODUTO', arrayProdutos);

      window.sessionStorage.setItem('arrayProdutos', JSON.stringify(arrayProdutos));
    },

    excluirProduto({ commit }, index) {
    		const arrayProdutos = JSON.parse(window.sessionStorage.getItem('arrayProdutos'));

    		arrayProdutos.splice(index, 1);

      commit('SET_PRODUTO', arrayProdutos);

      window.sessionStorage.setItem('arrayProdutos', JSON.stringify(arrayProdutos));
    },
  },
};

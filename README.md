<p align="center"><img src="https://br.vuejs.org/images/logo.svg" alt="Vue logo" width="72" height="72"></p>


# Projeto Prático de Vue JS + Bootstrap + VueRouter + Vuex

> Exemplo básico Vue JS com implementação de rotas com autenticação, com páginas-Externas para usuários não-autenticados e páginas-Internas para usuários autenticados, e com páginas/formulários de Login e Registro de usuários, páginas internas Home e Produtos. Na página de produtos tem a parte de listagem de produtoa e a parte de cadastrar e editar produtos. Foi utilizado sessionStorage para armazenar os dados.

## Baixar o projeto
Primeiro passo, clonar o projeto:
``` bash
# Clonar
git clone https://github.com/JefersonGarcia2018/vue-2x

# Acessar
cd vue-2x
```

## Configuração
``` bash
# Atualizar dependências
npm install

# Compila e roda em ambiente local localhost:8080
npm run serve
```
## Login
Ao rodar o projeto, inicialmente, será apresentada a página de Login, na qual terá o link para página de Cadastro, então clique em Cadastrar-se, preencha o formulário de cadastro, e após feito o cadastro, os dados serão salvos na sessionStorage, e você será redirecionado para a página HomeInterna do site. Você poserá cadastar e editar produtos e visualiza a listagem dos produtos cadastrados.

## Imagnes do Projeto
<div>
	<img src="@/assets/login01.png" alt="" width="72" height="72">
</div>
<p align="center"><img src="https://br.vuejs.org/images/logo.svg" alt="Vue logo" width="72" height="72"></p>


# Projeto Prático de Vue.js + Bootstrap + VueRouter + Vuex

> Projeto Prático de Vue.js com implementação de rotas com autenticação, com páginas-Externas para usuários não-autenticados e páginas-Internas para usuários autenticados, e com páginas/formulários de Login e Registro de usuários, páginas internas Home e Produtos. Na página de produtos tem a parte de listagem de produtos e a parte de cadastrar e editar produtos. Foi utilizado sessionStorage para armazenar os dados.

## Baixar o projeto
Primeiro passo, clonar o projeto:
``` bash
# Clonar
git clone https://github.com/JefersonGarcia2018/vue-router-vuex.git

# Acessar
cd vue-router-vuex
```

## Configuração
``` bash
# Atualizar dependências
npm install

# Compila e roda em ambiente local localhost:8080
npm run serve
```
## Login
Ao rodar o projeto, inicialmente, será apresentada a página de Login, na qual terá o link para página de Cadastro, então clique em Cadastrar-se, preencha o formulário de cadastro de usuário, e após feito o cadastro, os dados serão salvos na sessionStorage, e você será redirecionado para a página Home interna do site. Você poderá cadastrar, editar e excluir produtos e visualizar a listagem dos produtos cadastrados.

## Imagens do Projeto
<div align="center">
  <h2>Página de Login com validação de formulário</h2>
<img src="https://user-images.githubusercontent.com/40130224/156477588-122680c1-16f9-46dc-aaf7-87a092ad9572.png" alt="login">
</div>
<div align="center">
  <h2>Página de Cadastro com validação de formulário</h2>
<img src="https://user-images.githubusercontent.com/40130224/156479222-6ba24431-7f66-400f-add1-a6705b44695b.png" alt="cadastro">
</div>
<div align="center">
  <h2>Página de Home para usuários autenticados</h2>
<img src="https://user-images.githubusercontent.com/40130224/156479845-5930a301-1ac4-4b95-98d0-31baedf4f308.png" alt="cadastro">
</div>
<div  align="center">
  <h2>Página <b>Produtos</b> na aba: Listagem dos Produtos</h2>
  <h2>Com as ações de Editar e Excluir produto</h2>
<img src="https://user-images.githubusercontent.com/40130224/156481098-f8ec2ce0-c1ed-47f8-bb03-5f92990b5bb9.png" alt="cadastro">
<img src="https://user-images.githubusercontent.com/40130224/156483864-c7f3efac-bc60-4ae0-a3b2-797c24960080.png" alt="cadastro">
</div>
<br>
<br>
<div  align="center">
  <h2>Página <b>Produtos</b> na aba: Cadastrar Produto</h2>
  <h2>Com validação de formulário</h2>
<img src="https://user-images.githubusercontent.com/40130224/156482862-791e42db-80c1-4751-8827-7ba0c550b836.png" alt="cadastro">
</div>
<div  align="center">
<img src="https://user-images.githubusercontent.com/40130224/156483443-c65dc5af-c76a-4bc4-af49-027c1b985938.png" alt="cadastro">
</div>

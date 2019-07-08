# EasyList ReactJS (Web)

### Objetivos e detalhes do projeto

Esta é uma POC para testar o desenvolvimento em ReactJS em conjunto com Redux, Redux-Saga e DuckPattern (Reducers e Actions no mesmo arquivo - Sem Redux-Sauce).
Pequenos equívocos de interface (UI/UX) podem ser observados, como por exemplo a falta de Loading em algumas interações, o que não invalida o valor acadêmico do projeto ;)

O Projeto também foi uma boa fonte de testes para ciclos de vida e comportamento do render dos componentes!
Aproveite a integração com o Reactotron e divirta-se com os _console.tron.log()_ no ciclo de vida ;)

Ex: O componente List, responsável por renderizar cada uma das listas, "ouve" o estado com todas as listas, isso gera um plano carteziano no render dos componentes, ou seja, ao atualizar o estado de uma lista o render é executado o número de ítens da lista para cada componente.

A aplicação não possui componente de erro - tudo é impresso no console e no log do reactotron ;)

![Imagem do App EasyList-ReactJS Rodando](https://raw.githubusercontent.com/mayconfrancisco/easylist-server/master/imgs/EasyList-ReactJS-GIF.gif)

### Para rodar o projeto:

_Sete as configurações de endereço do BackEnd no arquivo /src/services/api.js_

_Para baixar as dependências_

**yarn**

_Para iniciar a aplicação_

**yarn start**

### Sopinha de Letrinhas

**prop-types** para as validações de parâmetros _props_

**axios** para requisições HTTP ao BackEnd

**react-redux, redux, redux-saga** para o gerenciamento do estado da aplicação

**react-router-dom** para gerenciamento das rotas da aplicação embora tenhamos apenas uma e esse seria dispensável, ficou para efeitos de estudo ;)

**reactotron-react-js, reactotron-redux, reactotron-redux-saga** para dedug e auxílio na fase de desenvolvimento

**styled-components** para facilitar a criação e manutenção dos estilos da aplicação

# Controle Rural

**Autor:** Vinicius Ciunek & Mauricio Stempinhaki

## Descrição do Projeto

Este projeto tem como objetivo implementar uma aplicação web para controle de fluxo de dados de uma fazenda. O sistema visa gerenciar a entrada de mercadorias, gastos e despesas mensais, além de possibilitar o cadastro de fornecedores e produtos. A aplicação foi desenvolvida utilizando o framework Angular.

## Tema e Escopo

- **Tema:** Controle de dados e fluxo de mercadorias em uma fazenda.
- **Escopo:** Gerenciar entradas de mercadorias, gastos e despesas mensais, e cadastro de fornecedores.

## Protótipo no Figma

[Protótipo da Aplicação no Figma](https://www.figma.com)

## Design System

[Documento do Design System](https://www.figma.com)
*(Substitua pelo link real do seu design system)*

## Framework CSS Utilizado

**Tailwind CSS**

## Dependências

- **Angular:** Framework principal para desenvolvimento da aplicação.
- **Tailwind CSS:** Framework CSS para estilização responsiva e moderna.
- **Axios:** Biblioteca para requisições HTTP, utilizada para comunicação com o JSON Server.
- Outras dependências são gerenciadas via `npm` conforme definido no `package.json`.

## Link para o Site em Produção

[Aplicação no GitHub Pages](https://github.com)

## Checklist de Funcionalidades

### RA1 - Prototipar e projetar interfaces gráficas de usuário
- [x] ID1: Prototipagem de interfaces que demonstram usabilidade
- [x] ID2: Design de interfaces responsivas

### RA2 - Criar e reutilizar componentes em frameworks frontend
- [x] ID3: Desenvolvimento de componentes reutilizáveis
- [x] ID4: Integração de frameworks CSS
- [x] ID5: Aplicação de diretivas estruturais
- [x] ID6: Criação de listas e galerias dinâmicas
- [ ] ID7: Uso eficaz de Pipes para formatação de dados

### RA3 - Sincronizar dados entre interface gráfica e modelo de dados
- [ ] ID8: Aplicação de one-way data binding
- [ ] ID9: Event binding para interação com o modelo
- [ ] ID10: Implementação de two-way data binding
- [ ] ID11: Uso de variáveis de template

### RA4 - Implementar comunicação entre componentes
- [ ] ID12: Comunicação entre componentes via serviços
- [ ] ID13: Uso das diretivas @Input e @Output

### RA5 - Criar interfaces de navegação intuitivas
- [ ] ID14: Configuração de rotas na aplicação
- [ ] ID15: Passagem de dados entre componentes
- [ ] ID16: Estrutura de navegação aninhada
- [ ] ID17: Aplicação de guardas de rotas

### RA6 - Realizar requisições assíncronas
- [ ] ID18: Requisições a uma API pública
- [ ] ID19: Requisições a uma API simulada
- [ ] ID20: Tratamento de respostas de requisições
- [ ] ID21: Validações de entrada em formulários
- [ ] ID22: Desabilitação de submit em campos inválidos
- [ ] ID23: Uso de Promises para tratar respostas
- [ ] ID24: Uso de Observables para tratar respostas

### RA7 - Gerenciar o código-fonte de maneira eficiente
- [ ] ID25: Criação do repositório no GitHub com Gitflow
- [ ] ID26: Colaboração efetiva no desenvolvimento
- [ ] ID27: Configuração e execução do processo de build

## Instruções de Execução

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/viniciusciunek/controle-rural-web3.git

2. **Acessar o diretório do projeto:**
   ```bash
    cd controle-rural-web3

3. **Instalar as dependências:**
  ```bash
    npm install

4. **Iniciar nosso banco de dados:**
    ```bash
    npx json-server --watch server/db.json

5. **Executar o projeto:**
  ```bash
  ng serve --open

### A aplicação estará disponível em http://localhost:4200/.

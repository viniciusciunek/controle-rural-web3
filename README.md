# Controle Rural

**Autores:** Vinicius Ciunek & Mauricio Stempinhaki

## Descrição do Projeto
Aplicação web para gestão de estoque e despesas em propriedades rurais, desenvolvida em Angular, com funcionalidades de:
- Cadastro de produtos (insumos agrícolas, rações, equipamentos)
- Registro de despesas operacionais
- Controle de estoque e movimentações financeiras
- Relacionamento com fornecedores

## Tema e Escopo
- **Tema:** Sistema de gestão rural integrado
- **Escopo Principal:**
  - Cadastro de produtos e categorias
  - Registro de despesas com relacionamento a produtos
  - Controle de estoque e fluxo financeiro
  - Interface responsiva para uso em campo

## Protótipo no Figma
[Protótipo da Aplicação no Figma](https://www.figma.com) *(link atualizar)*

## Tecnologias Principais
- **Angular 19** (Framework principal)
- **Tailwind CSS** (Estilização responsiva)
- **JSON Server** (API simulada)
- **Axios** (Cliente HTTP)

## Checklist Atualizado

### RA1 - Prototipagem
- [x] ID1: Protótipos no Figma
- [x] ID2: Design responsivo implementado

### RA2 - Componentes
- [x] ID3: Componentes reutilizáveis (ex: SuccessButtonComponent)
- [x] ID4: Tailwind CSS integrado
- [x] ID5: Diretivas *ngIf (ex: validação de formulários)
- [x] ID6: Diretivas *ngFor (listagem de produtos/despesas)
- [x] ID7: Pipes nativos (date, number)

### RA3 - Data Binding
- [x] ID8: Interpolation ({{ variaveis }})
- [x] ID9: Event binding ((click), (submit))
- [x] ID10: Two-way binding ([(ngModel)])
- [ ] ID11: Variáveis de template

### RA4 - Comunicação
- [x] ID12: Serviços compartilhados (DespesasService, ProdutosService)
- [x] ID13: @Input/@Output (SuccessButtonComponent)

### RA5 - Roteamento
- [x] ID14: Sistema de rotas configurado
- [x] ID15: Passagem de parâmetros (/editar/:id)
- [x] ID16: Rotas aninhadas (/produtos/editar)
- [ ] ID17: Guards de rotas

### RA6 - Requisições
- [ ] ID18: API pública externa
- [x] ID19: CRUD completo com JSON Server
- [x] ID20: Tratamento básico de erros
- [x] ID21: Validação de campos obrigatórios
- [x] ID22: Botão desabilitado em formulários inválidos
- [x] ID23: Implementação com Promises
- [ ] ID24: Implementação com Observables

### RA7 - Versionamento
- [x] ID25: Repositório GitHub com estrutura básica
- [x] ID26: Colaboração via GitHub
- [ ] ID27: Deploy em produção

## Execução do Projeto
```bash
# Clone o repositório
git clone https://github.com/viniciusciunek/controle-rural-web3.git
cd controle-rural-web3

# Instale as dependências
npm install

# Inicie o backend simulado (em terminal separado)
npx json-server --watch server/db.json

# Execute a aplicação
ng serve --open

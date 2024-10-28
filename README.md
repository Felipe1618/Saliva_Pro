# Aplicativo para Dentista

Desenvolvido com Ionic e React Native

## 1. Requisitos Funcionais

Os requisitos funcionais descrevem o comportamento e as funcionalidades que o aplicativo deve apresentar.

### 1.1. Login do Dentista

- O usuário (dentista) poderá se logar no aplicativo utilizando e-mail de sua preferência e senha.
  - Sem validação de e-mail com serviços externos;
- O processo de criação da senha será feito diretamente no aplicativo.
  - senha de no mínimo 6 dígitos, máximo 8 contendo letras ou números ou ambos
- Caso seja o primeiro login, será pedido um cadastro dos dados do dentista responsável
  - Confirmar novo cadastro com senha do aparelho do usuário;
  - Dados de cadastro: Nome e Sobre Nome / Cadastro dentista / Dados de contatos / Especialidade / (verificar com cliente mais dados)
- **Cenário de erro**: Tentativa de login com e-mail ou senha incorretos. O sistema deve retornar uma mensagem de erro e solicitando nova tentativa de login.
- **Cenário de segurança**:  O aplicativo solicitará uma autenticação com a senha do aparelho em caso de mais 5 tentativas.

### 1.2. Inserção de Resultados dos Testes

- Terá uma área responsável em coletar dados básicos do paciente para geração do documento final.
- O dentista poderá inserir os resultados de 7 testes realizados no paciente.
- Cada teste terá um intervalo fixo de valores:
    1. Teste 1: Opção de resultado de 11 a 55.
    2. Teste 2: Opção de resultado de 0 a 10.
    3. Teste 3: Opção de resultado de 0,0 a 1.
    4. Teste 4: Opção de resultado de 4 a 9.
    5. Teste 5: Opção de resultado de 0 a 0,6.
    6. Teste 6: Opção de resultado de 0 a 3.
    7. Teste 7: Opção de resultado de 4 a 9.

### 1.3. Verificação de Resultados e Mensagens de Alerta

- Para cada teste, haverá valores de referência estáticos.
- Haverá uma descrição curta de cada teste.
- A inserção de resultado para cada teste será inserida por meio de um campo de texto.
- Ao final da inserção de todos os valores dos testes, habilitará um botão para gerar o resultado para o próximo fluxo.
- Se um ou mais resultados inseridos estiverem fora do intervalo de referência, o sistema deverá exibir uma mensagem de alerta em vermelho.
- **Cenário de personalização**: As mensagens de alerta podem ser exibidas com um texto padrão e cor vermelha.

### 1.4. Exibição de Resultados

- Os resultados dos testes deverão ser exibidos no aplicativo em duas cores:
  - Verde para resultados dentro do intervalo normal.
  - Vermelho para resultados fora do intervalo.
- A interface deverá ser clara, com destaque para os resultados fora do padrão.

### 1.5. Recomendações de Tratamento

- O sistema deverá exibir uma lista pré-definida de tratamentos.
- As recomendações serão todas exibidas em uma única página.
- O dentista poderá selecionar os tratamentos recomendados com base nos resultados dos testes.
- **Cenário de validação**: O dentista terá a opção de pré-visualizar o laudo final antes de confirmar as recomendações.

### 1.6. Geração de Laudo em PDF

- O sistema permitirá a geração de um laudo em PDF contendo os resultados dos testes, mensagem principal com a cor de resultado, recomendações de tratamento, dados do dentista e do paciente.
- O layout do PDF será simples, sem assinatura digital.
- O laudo gerado deverá incluir:
  - Resultados dos testes.
  - Data do teste/consulta.
  - Mensagem principal com a cor de resultado
  - Recomendações selecionadas.
  - Informações do dentista.
  - Informações do paciente.
- **Cenário de pré-visualização**: O dentista poderá pré-visualizar o PDF antes de gerá-lo.

### 1.7. Funcionalidades (Sugestão)

- O aplicativo terá um menu para visualização do histórico de testes/consultas realizados pelo dentista.
- Cada registro de testes/consulta terá um ‘botão’ para edição, exemplo:
  - Opção para abrir documento de Dentista ou de Paciente.
  - Deletar;
  - Gerar PDF;
  - Abrir local do arquivo;
- O aplicativo terá uma área do Dentista contendo seus dados de cadastro, login, e exclusão da ‘conta’

## 2. Compatibilidade

- O aplicativo deve ser compatível com dispositivos Android e iOS.
- A interface deverá ser responsiva, adaptando-se a diferentes tamanhos de tela.

## 3. Usabilidade

- O aplicativo deve ser intuitivo e fácil de usar, com navegação clara e organizada.
- Todas as funcionalidades deverão estar acessíveis em no máximo 3 cliques a partir da tela inicial.

## 4. Requisitos de Interface

Decidir com o cliente

## 5. Estilos Visuais

- Paleta de cores definida: Verde (resultados normais), Vermelho (resultados alterados).
- Tipografia a ser definida com base no feedback do cliente.
- Design limpo e minimalista, sem sobrecarregar o usuário visualmente.

### 5.1 Layout de Telas

- **Tela de Login**: Campo para e-mail e senha;
    Botão para 'primeiro acesso' ou 'registrar dados';
    Botão 'esqueci meu acesso';
    Botão 'Entrar'.
- **Tela de Inserção de Resultados**: Interface clara para inserir valores de 7 testes, com visualização dos resultados coloridos (verde/vermelho).
- **Tela de Recomendações**: Lista de recomendações com opção de selecionar múltiplos tratamentos.
- **Tela de Geração de PDF**: Botão para pré-visualizar o documento, botão para confirmar a geração do PDF.

## 6. Publicação e Perfil para Lojas

O aplicativo será publicado nas lojas Google Play e Apple Store utilizando o perfil de desenvolvedo. Isso envolverá uma série de
passos, documentos e valores para a validação.

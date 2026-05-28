💇‍♀️ Sistema Backend - Salão de Beleza

Projeto desenvolvido para a disciplina de Backend do curso de Análise e Desenvolvimento de Sistemas.

O sistema foi criado para auxiliar no gerenciamento de um salão de beleza, permitindo autenticação de usuários, gerenciamento de clientes, controle de agendamentos e integração com API externa.

🚀 Tecnologias Utilizadas
Node.js
Express
MySQL
JWT (JSON Web Token)
JavaScript
Postman
GitHub
GitHub Desktop
📁 Estrutura do Projeto
projeto_backend_salaodebeleza
│
├── src
│   ├── database
│   ├── middlewares
│   ├── routes
│   ├── controllers
│   └── models
│
├── .env
├── package.json
├── package-lock.json
└── server.js
🔐 Funcionalidades
Autenticação com JWT
Proteção de rotas privadas
CRUD de clientes
Sistema de agendamentos
Bloqueio de horários duplicados
Bloqueio de agendamentos aos domingos
Filtro de clientes por nome
Paginação de resultados
Integração com API ViaCEP
Middleware global de erros
Validação de dados de entrada
📌 Rotas da API
Método	Rota	Descrição
POST	/auth/login	Gera token JWT
POST	/clientes	Cria cliente
GET	/clientes	Lista clientes
PUT	/clientes/:id	Atualiza cliente
DELETE	/clientes/:id	Remove cliente
POST	/agendamentos	Cria agendamento
GET	/cep/:cep	Consulta CEP
⚙️ Como Executar o Projeto
1. Clonar o repositório
git clone LINK_DO_REPOSITORIO
2. Instalar dependências
npm install
3. Configurar arquivo .env

Exemplo:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=salao
JWT_SECRET=segredo
4. Iniciar servidor
npx nodemon server.js
🧪 Testes

Os testes da API foram realizados utilizando o Postman.

Foram testados:

Login JWT
Rotas protegidas
CRUD de clientes
Validação de dados
Regras de negócio dos agendamentos
Integração ViaCEP
🌐 API Externa

O sistema utiliza a API ViaCEP para busca automática de endereços através do CEP informado.

📚 Aprendizados

Durante o desenvolvimento do projeto foram aplicados conceitos como:

APIs REST
Autenticação JWT
Integração com banco de dados
Middlewares
Regras de negócio
Validação de dados
Versionamento com GitHub
👨‍💻 Autor

Projeto desenvolvido por Guilherme Augusto para fins acadêmicos.

# AI HelpDesk API

API REST desenvolvida com Node.js e Express para a gestão de pedidos de suporte técnico, implementando as operações CRUD (Create, Read, Update e Delete).

## Sobre o projeto

O AI HelpDesk API é um projeto de aprendizagem e demonstração de competências em desenvolvimento backend, integração de sistemas e gestão de dados através de APIs REST.

A aplicação permite criar, consultar, atualizar e eliminar pedidos de suporte técnico, utilizando endpoints HTTP e respostas em formato JSON.

## Funcionalidades

- **Criar pedidos:** registar novos pedidos de suporte técnico.
- **Consultar pedidos:** listar todos os pedidos ou consultar um pedido específico pelo ID.
- **Atualizar pedidos:** modificar o título, a descrição e o estado de um pedido.
- **Eliminar pedidos:** remover pedidos existentes.
- **Validar dados:** verificar os campos obrigatórios e os estados permitidos.
- **Gerir respostas HTTP:** utilizar códigos como `200`, `201`, `400`, `404` e `204`.
- **Testar endpoints:** utilizar HTTPie para enviar pedidos e validar respostas da API.

## Tecnologias utilizadas

- Node.js
- Express.js
- JavaScript
- API REST
- HTTP e JSON
- HTTPie
- Git e GitHub

## Instalação e execução

1. Clonar o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Entrar na pasta do projeto:

   ```bash
   cd ai-helpdesk
   ```

3. Instalar as dependências:

   ```bash
   npm install
   ```

4. Iniciar o servidor:

   ```bash
   node server.js
   ```

5. Aceder ao endpoint de verificação:

   ```text
   http://localhost:3000/health
   ```

## Exemplos de utilização com HTTPie

Criar um pedido:

```bash
http POST :3000/tickets title="Erro de impressão" description="A impressora não funciona"
```

Consultar todos os pedidos:

```bash
http GET :3000/tickets
```

Consultar um pedido pelo ID:

```bash
http GET :3000/tickets/1
```

Atualizar um pedido:

```bash
http PUT :3000/tickets/1 title="Impressora avariada" description="Impressora sem resposta" status="em andamento"
```

Eliminar um pedido:

```bash
http DELETE :3000/tickets/1
```

## Objetivos de aprendizagem

Este projeto permite praticar:

- Desenvolvimento de APIs REST com Express.
- Implementação das operações CRUD.
- Validação de dados e tratamento de erros.
- Utilização de códigos de estado HTTP.
- Testes manuais de APIs com HTTPie.
- Diagnóstico e resolução de problemas durante o desenvolvimento.

## Melhorias futuras

- Integração com SQLite ou PostgreSQL para persistência de dados.
- Implementação de autenticação e controlo de acessos.
- Criação de testes automatizados.
- Integração de workflows de automação com n8n.
- Integração de serviços de Inteligência Artificial para classificar pedidos e sugerir soluções de suporte técnico.

## Estado do projeto

Projeto de aprendizagem em desenvolvimento, com foco na consolidação de competências de backend, APIs e automação.

---

Desenvolvido como parte do meu percurso de aprendizagem em desenvolvimento de software e integração de soluções tecnológicas.
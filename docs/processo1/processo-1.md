# 📌 Processo 1 — Cadastro e Login de Usuário

## 🎯 Objetivo

Permitir que usuários se cadastrem e acessem o sistema de forma segura, possibilitando a utilização das funcionalidades do aplicativo.

---

## 🧩 Wireframe

O wireframe representa a estrutura visual das telas de cadastro e login.

### 📱 Telas incluídas:

* Tela de Login
* Tela de Cadastro

### 🖼️ Wireframe do Processo:

*(Insira aqui a imagem ou link do wireframe)*

---

## 🔄 Modelagem BPMN

A modelagem BPMN descreve o fluxo de autenticação do usuário dentro do sistema.

### ⚙️ Fluxo do processo:

1. Usuário acessa a tela de login
2. Escolhe entre:

   * Fazer login
   * Criar uma conta
3. Caso faça login:

   * Insere email e senha
   * Sistema valida os dados
   * Se válido → acesso liberado
   * Se inválido → mensagem de erro
4. Caso crie uma conta:

   * Insere dados (nome, email, senha)
   * Sistema valida e cria o usuário
   * Redireciona para o login ou home

### 🖼️ Diagrama BPMN:

![Cadastro e Gestão de Usuário (DraftArena) - BPMN](/docs/processo1/images-process1/Cadastro%20e%20Gestão%20de%20Usuário%20(DraftArena)%20Diagrama%20(1).png)

---

## 🔐 Regras de Negócio

* O email deve ser único
* A senha deve possuir um mínimo de caracteres
* Campos obrigatórios não podem estar vazios
* Usuário só acessa o sistema se estiver autenticado

---

## 🚀 Resultado Esperado

Usuários conseguem criar contas e acessar o sistema de forma simples e segura, garantindo controle de acesso às funcionalidades do aplicativo.

---

## 📌 Próximos Passos

* Implementação do sistema de autenticação no frontend
* Integração com backend
* Criação de sessão/token de usuário

---

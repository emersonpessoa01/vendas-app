# 🛠️ Desenvolva Aplicações Completas com Spring Boot e React.js  

Este repositório contém materiais e projetos do curso **[Desenvolva Aplicações Completas com Spring Boot e React.js](https://www.udemy.com/course/desenvolva-aplicacoes-completas-com-spring-boot-e-react-js/)** da Udemy.  

<->
## 📌 Sobre o curso  
O curso ensina o desenvolvimento full stack integrando **Spring Boot** no backend e **React.js** no frontend. Além disso, aborda conceitos essenciais como:  

🔹 Criação e consumo de **APIs REST**  
🔹 **Segurança** com JWT  
🔹 Persistência com **JPA/Hibernate**  
🔹 Integração com bancos de dados **PostgreSQL/MySQL**  
🔹 Deploy na **nuvem (Heroku, Vercel, etc.)**  

## 🚀 Tecnologias Utilizadas  
🔹 Backend:** Java, Spring Boot, Spring Security, JPA/Hibernate  
🔹 Frontend:** React.js, React Hooks, Context API  
🔹 Banco de Dados:** PostgreSQL, MySQL  
🔹 Ferramentas:** Postman, Docker, Maven  


📌 **Mais detalhes:** [Curso na Udemy](https://www.udemy.com/course/desenvolva-aplicacoes-completas-com-spring-boot-e-react-js/)

---


# Instalação do Next.js

Este guia descreve os passos para instalar e configurar um projeto Next.js com TypeScript.

## Requisitos
- **Node.js** versão 12 ou superior
- **NPM** ou **Yarn** instalado

## Passos para criar um projeto Next.js

### 1. Verificar se o `npx` está instalado
O `npx` já vem junto com o Node.js. Para verificar:
```sh
npx -v
```
Se o comando retornar uma versão, o `npx` está instalado corretamente.

### 2. Instalar o Yarn (Opcional, mas recomendado)
O Yarn pode ser utilizado no lugar do NPM para uma instalação mais rápida:
```sh
npm install -g yarn
```
Para verificar se o Yarn foi instalado corretamente:
```sh
yarn -v
```

### 3. Criar um novo projeto Next.js
Com o NPM:
```sh
npx create-next-app@latest nome-do-projeto --typescript
```
Ou com o Yarn:
```sh
yarn create next-app nome-do-projeto --typescript
```

Durante a criação, será solicitado o nome do projeto. Após confirmar, o Next.js será instalado junto com as dependências necessárias.

### 4. Acessar a pasta do projeto
```sh
cd nome-do-projeto
```

### 5. Iniciar o servidor de desenvolvimento
Com NPM:
```sh
npm run dev
```
Ou com Yarn:
```sh
yarn dev
```

O servidor será iniciado e estará acessível em: [http://localhost:3000](http://localhost:3000)

Se a tela inicial do Next.js aparecer, significa que a instalação foi bem-sucedida!

## Instalação do Bulma
Para adicionar o framework Bulma ao seu projeto Next.js, utilize um dos comandos abaixo:

Com NPM:
```sh
npm install bulma
```

Com Yarn:
```sh
yarn add bulma
```

Depois, importe o CSS do Bulma no seu projeto, editando o arquivo `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import "bulma/css/bulma.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vendas App",
  description: "Aplicação de vendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

```

## FontAwesome com React

Este guia explica como instalar e utilizar a biblioteca FontAwesome em um projeto React.

## Instalando as dependências

Para instalar o FontAwesome com `yarn`, execute o seguinte comando:

```bash
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
```

## Utilizando o FontAwesome

Você pode usar o FontAwesome de duas formas:
1. Importando cada ícone individualmente nos seus componentes.
2. Instanciando toda a biblioteca no arquivo `_app.js` (caso utilize Next.js) ou no ponto de entrada do seu app.

### Importando cada ícone por componente

Caso queira importar apenas os ícones que precisar em cada componente, siga este exemplo:

```javascript
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyComponent() {
  return <FontAwesomeIcon icon={faCoffee} />;
}
```

### Instanciando a biblioteca inteira (Opcional)

Se quiser evitar importar ícones individualmente, pode adicionar toda a biblioteca ao contexto global do seu projeto.

Exemplo para Next.js (arquivo `_app.js` ou `_app.tsx`):

```javascript
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
```

Agora, os ícones podem ser usados diretamente sem necessidade de importação individual.

## 🧩 Instalação do Axios

Para consumir APIs no frontend, utilizaremos a biblioteca **Axios**.

### Instalar o Axios

Com **NPM**:

```bash
npm install axios
```

## 📦 Yup - Validação de Esquemas JavaScript

**Yup** é uma biblioteca JavaScript para **validação de objetos e schemas**. É amplamente utilizada com bibliotecas de formulários como React Hook Form e Formik, permitindo regras de validação simples, poderosas e reutilizáveis.

---

## 🚀 Instalação

Use o gerenciador de pacotes de sua preferência:

```bash
npm install yup
# ou
yarn add yup
```

## 📚 Funcionalidades
Validação de tipos: string, number, boolean, array, object, date.

* Suporte a validação condicional.

* Mensagens de erro personalizadas.

* Validação assíncrona (ideal para checagens externas).

* Integração com formulários (Formik, React Hook Form etc).

## ✍️ Exemplo básico
```bash
import * as yup from 'yup';

const schema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  idade: yup
    .number()
    .positive('A idade deve ser positiva')
    .integer('A idade deve ser um número inteiro')
    .required('A idade é obrigatória'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
});

// Validação
schema
  .validate({ nome: 'Emerson', idade: 25, email: 'emerson@email.com' })
  .then((data) => console.log('Válido:', data))
  .catch((err) => console.error('Erro:', err.errors));
```

## 📦 Integração com React Hook Form
```bash
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(schema),
});
```

## 🔗 Documentação oficial
Acesse a documentação completa em:
👉 https://github.com/jquense/yup

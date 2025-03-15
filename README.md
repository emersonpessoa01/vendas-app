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


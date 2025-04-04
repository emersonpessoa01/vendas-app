"use client";

import { Menu } from "./menu";

interface LayoutProps{
  titulo: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({titulo,children}) => {
  console.log(`Título recebido: ${titulo}`)
  return (
    <div className="app">
      <section className="main-content is-flex is-fullheight">
        {/* Menu fixo à esquerda */}
        <Menu />
        {/* Conteúdo ocupa o espaço restante */}
        <div className="container column is-flex-grow-1">
          <div className="section">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title w-full">{titulo}</p>
              </div>
              <div className="card-content">
                <div className="content">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .main-content {
          display: flex;
          width: 100%;
        }

        .container {
          max-width: 800px; /* Evita que o conteúdo fique muito esticado */
          width: 100%;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};




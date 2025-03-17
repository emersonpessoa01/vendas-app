"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUsers, faCubes } from "@fortawesome/free-solid-svg-icons";

export const Menu: React.FC = () => {
  return (
    <aside className="menu column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile bg-gray-200">
      <p className="menu-label is-hidden-touch p-4">Minhas Vendas</p>
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#" className="menu-link" aria-current="page">
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
            <span className="menu-text">Home</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <span className="menu-text">Cadastros</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            <FontAwesomeIcon icon={faCubes} className="icon" />
            <span className="menu-text">Configurações</span>
          </a>
        </li>
      </ul>

      <style jsx>{`
        .menu {
          width: 100%;
          max-width: 250px;
          min-width: 200px;
          padding: 12px 24px;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 0;
        }

        .menu-item {
          list-style: none;
          width: 100%;
          border-radius: 5px;
          transition: background 0.3s;
        }

        .menu-item:hover {
          background: #f5f5f5;
        }

        .menu-link {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          padding: 8px;
          text-decoration: none;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .icon {
          width: 18px;
          flex-shrink: 0;
        }

        .menu-text {
          flex-grow: 1;
          margin-left: 8px;
        }
      `}</style>
    </aside>
  );
};

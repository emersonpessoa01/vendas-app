"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUsers, faCubes, faSignOutAlt, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <aside className="menu column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile bg-gray-200">
      <p className="menu-label is-hidden-touch p-4">Minhas Vendas</p>
      <ul className="menu-list">
        <MenuItem href="/" label="Home" icon={faTachometerAlt} />
        <MenuItem href="/pages/cadastro/produtos" label="Produtos" icon={faUsers} />
        <MenuItem href="/" label="Configurações" icon={faCubes} />
        <MenuItem href="/" label="Sair" icon={faSignOutAlt} />
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

          background: transparent !important;
        }

        .menu-link {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          /* padding: 8px; */
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

interface MenuItemProps {
  href: string;
  label: string;
  icon: IconDefinition;
}
const MenuItem: React.FC<MenuItemProps> = ({ href, label, icon }) => {
  return (
    <li className="list-none w-full">
      <Link
        href={href}
        className="button is-fullwidth has-text-black has-background-grey-lighter is-flex is-align-items-center is-justify-content-start"
      >
        <span className="icon mr-3">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

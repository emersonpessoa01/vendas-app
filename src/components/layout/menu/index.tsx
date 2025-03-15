import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUsers, faCubes, faChartBar } from "@fortawesome/free-solid-svg-icons";

export const Menu: React.FC = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">Minhas Vendas</p>
      <ul className="menu-list">
        <li>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faTachometerAlt} />
            </span>
            Dashboard
          </a>
        </li>
        <li>
          <a>
            <span className="icon">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            Clientes
          </a>
        </li>
        <li>
          <a>
            <span className="icon">
              <FontAwesomeIcon icon={faCubes} />
            </span>
            Produtos
          </a>
        </li>
        <li>
          <a>
            <span className="icon">
              <FontAwesomeIcon icon={faChartBar} />
            </span>
            Vendas
          </a>
        </li>
      </ul>
    </aside>
  );
};

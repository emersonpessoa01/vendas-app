import { Layout } from "components";
export const CadastroProdutos: React.FC = () => {
  return (
    <Layout titulo="Cadastro de produtos">
      <div className="field">
        <label htmlFor="inputSku" className="label">
          SKU:*
        </label>
        <div className="control">
          <input id="inputSku" autoFocus className="input" type="text" placeholder="Digite o SKU do produto" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="inputPreco" className="label">
          Preço:*
        </label>
        <div className="control">
          <input id="inputPreco" className="input" type="text" placeholder="Digite o preço do produto" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="inputNome" className="label">
          Nome:*
        </label>
        <div className="control">
          <input id="inputNome" className="input" type="text" placeholder="Digite o nome do produto" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="inputDesc" className="label">
          Descrição:*
        </label>
        <div className="control">
          <textarea id="inputDesc" className="textarea" placeholder="Digite a descriação detalhada do produto" />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button type="button" className="button is-link">Salvar</button>
        </div>
        <div className="control">
          <button type="button" className="button is-link is-light">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};

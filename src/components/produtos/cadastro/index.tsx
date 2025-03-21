import React from "react";
import { Layout } from "components";
export const CadastroProdutos: React.FC = () => {
  return (
    <Layout titulo="Cadastro de produtos">
      <div className="columns">
        <div className="field column is-half">
          <label htmlFor="inputSku" className="label">
            SKU:*
          </label>
          <div className="control">
            <input id="inputSku" autoFocus className="input" type="text" placeholder="Digite o SKU do produto" />
          </div>
        </div>
        <div className="field column is-half">
          <label htmlFor="inputPreco" className="label">
            Preço:*
          </label>
          <div className="control">
            <input id="inputPreco" className="input" type="text" placeholder="Digite o preço do produto" />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="field column is-full">
          <label htmlFor="inputNome" className="label">
            Nome:*
          </label>
          <div className="control">
            <input id="inputNome" className="input" type="text" placeholder="Digite o nome do produto" />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="field column is-full">
          <label htmlFor="inputDesc" className="label">
            Descrição:*
          </label>
          <div className="control">
            <textarea id="inputDesc" className="textarea" placeholder="Digite a descriação detalhada do produto" />
          </div>
          <div className="field is-grouped py-5">
            <div className="control">
              <button type="button" className="button is-link">
                Salvar
              </button>
            </div>
            <div className="control">
              <button type="button" className="button is-link is-light">
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

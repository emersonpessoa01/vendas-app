"use client";
import React, { useState } from "react";
import { Layout, Input } from "components";
export const CadastroProdutos: React.FC = () => {
  const [sku, setSku] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  const submit = () => {
    const produto = {
      sku,
      preco,
      nome,
      descricao,
    };
    console.log(produto);
  };

  return (
    <Layout titulo="Cadastro de produtos">
      <div className="columns">
        <Input label=" SKU:*" columnClasses="is-full" onChange={setSku} value={sku} />
        <div className="field column is-half">
          <label htmlFor="inputSku" className="label">
            SKU:*
          </label>
          <div className="control">
            <input
              id="inputSku"
              autoFocus
              className="input"
              type="text"
              placeholder="Digite o SKU do produto"
              value={sku}
              onChange={(event) => setSku(event.target.value)}
            />
          </div>
        </div>
        <div className="field column is-half">
          <label htmlFor="inputPreco" className="label">
            Preço:*
          </label>
          <div className="control">
            <input
              id="inputPreco"
              className="input"
              type="number"
              step="0.1"
              min={0}
              max={10000}
              placeholder="Digite o preço do produto"
              value={preco}
              onChange={(event) => setPreco(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="field column is-full">
          <label htmlFor="inputNome" className="label">
            Nome:*
          </label>
          <div className="control">
            <input
              id="inputNome"
              className="input"
              type="text"
              placeholder="Digite o nome do produto"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="field column is-full">
          <label htmlFor="inputDesc" className="label">
            Descrição:*
          </label>
          <div className="control">
            <textarea
              id="inputDesc"
              className="textarea"
              placeholder="Digite a descriação detalhada do produto"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            />
          </div>
          <div className="field is-grouped py-5">
            <div className="control">
              <button type="button" className="button is-link" onClick={submit}>
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

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
        <Input label=" SKU:*" columnClasses="is-half" onChange={setSku} value={sku} id="inputSku" placeholder="Digite o SKU do produto" />
        <Input label="Preço:*" columnClasses="is-half" onChange={setPreco} value={preco} id="inputPreco" placeholder="Digite o preço do produto" />
      </div>
      <div className="columns">
        <Input label="Nome:*" columnClasses="is-full" onChange={setNome} value={nome} id="inputNome" placeholder="Digite o nome do produto" />
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
"use client";
import React, { useState } from "react";
import { Layout, Input, Message } from "components";
import { useProdutoService } from "../../../config/services";
import { Produto } from "config/models/produtos";
import {converterEmBigDecimal, formatReal} from "config/util/money";
export const CadastroProdutos: React.FC = () => {
  const service = useProdutoService();
  const [sku, setSku] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [dataCadastro, setDataCadastro] = useState<string>("");

  const submit = () => {
    if(!sku || !preco || !nome || !descricao) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }
    const produto: Produto = {
      id,
      sku,
      preco: converterEmBigDecimal(preco),
      nome,
      descricao,
      dataCadastro: dataCadastro || new Date().toLocaleDateString("pt-BR") // ou outra formatação
    };
    

    if (id) {
      service.atualizar(produto).then((response) => {
        console.log(response);
        setId(produto.id ?? "");
        setDataCadastro(produto.dataCadastro ?? "");
        setSku(produto.sku ?? "");
        setPreco(formatReal(produto.preco?.toString() ?? ""));
        setNome(produto.nome ?? "");
        setDescricao(produto.descricao ?? "");
      });
      
    } else {
      // console.log(produto);
      service.salvar(produto).then((produtoResposta) => {
        console.log(produtoResposta);
        setId(produtoResposta.id ?? "");
        setDataCadastro(produtoResposta.dataCadastro ?? "");
        setSku(produtoResposta.sku ?? "");
        setPreco(formatReal(produtoResposta.preco?.toString() ?? ""));
        setNome(produtoResposta.nome ?? "");
        setDescricao(produtoResposta.descricao ?? "");
      });
      
    }
  };

  return (
    <Layout titulo="Cadastro de produtos">
      <Message tipo="warning" texto="Os campos com * são obrigatórios." />
      <Message tipo="danger" texto="Os campos com ** são obrigatórios." />
      <Message tipo="success" texto="Produto cadastrado com sucesso." />
      {/* Renderização condicional */}
      {id && (
        <div className="columns">
          <Input label="Código:" columnClasses="is-half" value={id?.toString() || ""} disabled id="inputId" />
          <Input label="Data de cadastro:" columnClasses="is-half" value={dataCadastro} id="inputCadastro" disabled />
        </div>
      )}
      <div className="columns">
        <Input label=" SKU:*" columnClasses="is-half" onChange={setSku} value={sku} id="inputSku" placeholder="Digite o SKU do produto" />
        <Input
          label="Preço:*"
          columnClasses="is-half"
          onChange={setPreco}
          value={preco}
          id="inputPreco"
          placeholder="Digite o preço do produto"
          currency
          maxLength={16}
        />
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
            <div className="control is-expanded">
              <button type="button" className="button is-link is-fullwidth is-hovered is-focused" onClick={submit}>
                {id ? "Atualizar" : "Salvar"}
              </button>
            </div>
            <div className="control is-expanded">
              <button type="button" className="button is-link is-light is-fullwidth is-hovered is-focused">
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

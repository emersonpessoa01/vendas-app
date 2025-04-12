/* Descrição */

import { httpClient } from "config/http";
import { Produto } from "config/models/produtos";

const resourceURL: string = "/api/produtos";
import { AxiosResponse } from "axios";

export const useProdutoService = () => {
  /* Criar método de Atualizar */
  const atualizar = async (produto: Produto): Promise<void> => {
    const url: string = `${resourceURL}/${produto.id}`;
    await httpClient.put<Produto>(url, produto);
  };

  /* Criar método de salvar */
  const salvar = async (produto: Produto): Promise<Produto> => {
    const response: AxiosResponse<Produto> = await httpClient.post<Produto>(resourceURL, produto);
    return response.data;
  };

  return {
    salvar,
    atualizar,
  };

  // const getAllProdutos = async () => {
  //     const response = await httpClient.get<Array<Produto>>(resourceURL);
  //     return response.data;
  // }

};
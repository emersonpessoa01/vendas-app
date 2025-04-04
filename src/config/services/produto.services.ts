/* Descrição */

import { httpClient } from "config/http";
import { Produto } from "config/models/produtos";

const resourceURL: string = "/api/produtos";
import { AxiosResponse } from "axios";

export const useProdutoService = () => {
  /* Criar método de salvar */
  const salvar = async (produto: Produto): Promise<Produto> => {
    const response: AxiosResponse<Produto> = await httpClient.post<Produto>(resourceURL, produto);
    return response.data;
  };
  return {
    salvar,
  };

  // const getAllProdutos = async () => {
  //     const response = await httpClient.get<Array<Produto>>(resourceURL);
  //     return response.data;
  // }
};

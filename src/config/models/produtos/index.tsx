/* Modelo de negócio para representar os objetos que vem da API*/

export interface Produto{
    id?: number;
    nome?: string;
    descricao?: string;
    preco?: number;
    sku?: string;
}


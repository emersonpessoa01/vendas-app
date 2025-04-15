export const converterEmBigDecimal = (value: string): number => {
  if (!value) return 0;

  // Remove os pontos de milhar e troca a vírgula por ponto decimal
  const cleaned = value.replace(/\./g, "").replace(",", ".");

  const result = parseFloat(cleaned);
  return isNaN(result) ? 0 : result;
};


export const formatReal = (valor: string): string => {
  if (!valor) return "0,00";

  // Remove tudo que não for dígito
  const cleaned = valor.replace(/\D/g, "");

  // Converte para número (em centavos), divide por 100 e formata
  const number = (parseInt(cleaned, 10) / 100).toFixed(2);

  const parts = number.split(".");
  let integerPart = parts[0];
  const decimalPart = parts[1];

  // Adiciona pontos como separadores de milhar
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${integerPart},${decimalPart}`;
};

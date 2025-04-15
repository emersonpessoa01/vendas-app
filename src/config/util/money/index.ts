export const converterEmBigDecimal = (value: string): number => {
  if (!value) {
    return 0;
  }
  return parseFloat(value.replace(".", "").replace(",", "."));
};

interface FormatRealInput {
  valor: string;
}

export const formatReal = (valor: FormatRealInput["valor"]): string => {
  const v = ((parseFloat(valor.replace(/\D/g, "")) / 100).toFixed(2) + "").split(".");

  const m = v[0]
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g);

  if (!m) {
    return "0,00";
  }

  for (let i = 0; i < m.length; i++) m[i] = m[i].split("").reverse().join("") + ".";

  const r = m.reverse().join("");

  return r.substring(0, r.lastIndexOf(".")) + "," + v[1];
};

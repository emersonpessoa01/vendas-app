export const ConverterEmBigDecimal = (valor: string): number => {
  if (!valor) {
    return 0;
  }
  const valorSemPonto = valor.replace(".", "").replace(",", ".");
  return Number(valorSemPonto);
};
export const formatReal = (valor: number) => {
  const v = ((Number(valor.toString().replace(/\D/g, "")) / 100).toFixed(2) + "").split(".");

  const m = v[0]
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g);

  if (!m) return valor;

  for (let i = 0; i < m.length; i++) {
    m[i] = m[i].split("").reverse().join("") + ".";

    const r = m.reverse().join("");
    return r.substring(0, r.lastIndexOf(".")) + "," + v[1];
  }
};
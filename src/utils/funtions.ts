export function formatNumbeToStringrBR(value: number) {
  if (isNaN(value)) return "0,00";

  return value
    .toFixed(2) // garante 2 casas decimais
    .replace(".", ",") // troca ponto por vírgula nas casas decimais
    .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // adiciona ponto a cada milhar
}

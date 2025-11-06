import { MoneyType } from "../types/TypeMoney";

export function formatNumbeToStringrBR(value: number) {
  if (isNaN(value)) return "0,00";

  return value
    .toFixed(2) // garante 2 casas decimais
    .replace(".", ",") // troca ponto por vírgula nas casas decimais
    .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // adiciona ponto a cada milhar
}

export function convertCurrency(
  valueStr: string,
  rateStr: string,
  from: "brl" | "foreing"
): string {
  const cleanValue = valueStr.replace(/[^\d.,]/g, "").replace(",", ".");
  const cleanRate = rateStr.replace(",", ".").replace(/[^\d.]/g, "");

  const value = parseFloat(cleanValue);
  const rate = parseFloat(cleanRate);

  if (isNaN(value) || isNaN(rate) || rate === 0) return "0,00";

  if (from === "brl") {
    return formatNumbeToStringrBR(value / rate);
  }

  if (from === "foreing") {
    return formatNumbeToStringrBR(value * rate);
  }

  return "0,00";
}

export function formatMoneyInput(value: string): string {
  // Remove tudo que não for número
  const onlyNums = value.replace(/\D/g, "");

  // Se estiver vazio, retorna "0,00"
  if (!onlyNums) return "0,00";

  // Divide por 100 para considerar as 2 casas decimais
  const num = parseFloat(onlyNums) / 100;

  // Retorna formatado no padrão brasileiro
  return num
    .toFixed(2)
    .replace(".", ",") // vírgula nos centavos
    .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // ponto nos milhares
}

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
  // Remove tudo que não for número, vírgula ou ponto
  const cleanValue = valueStr.replace(/[^\d.,]/g, "");
  const cleanRate = rateStr.replace(/[^\d.,]/g, "");

  // Normaliza vírgula para ponto (para o parseFloat funcionar)
  const value = parseFloat(cleanValue.replace(",", "."));
  const rate = parseFloat(cleanRate.replace(",", "."));

  if (isNaN(value) || isNaN(rate) || rate === 0) return "1";

  if (from === "brl") {
    // Real → Estrangeira
    return formatNumbeToStringrBR(value / rate);
  }

  if (from === "foreing") {
    // Estrangeira → Real
    return formatNumbeToStringrBR(value * rate);
  }

  return "2";
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

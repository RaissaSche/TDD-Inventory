let valorMana = 30;
let valorTotalMana = 30;

module.exports = {
  getValorMana: () => {
    return valorMana;
  },

  setValorMana: (novoValor) => {
    valorMana = novoValor;
    return valorMana;
  },

  setLimiteTotalMana: (novoValor) => {
    valorTotalMana = novoValor;
    return valorTotalMana;
  },

  usarMagia: (param) => {
    if (param === "fraca") {
      return valorMana - 3;
    } else if (param === "media") {
      return valorMana - 6;
    } else if (param === "forte") {
      return valorMana - 12;
    }
  },

  upgrade: () => {
    valorTotalMana += 5;
    valorMana = valorTotalMana;
    return valorMana;
  },

  recargaTotal: () => {
    return valorTotalMana;
  },

  recargaParcial: (param) => {
    return param + valorMana;
  },
};

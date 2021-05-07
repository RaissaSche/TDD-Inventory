let valorMana = 30; //valor inicial
let valorMagiaFraca = 3;
let valorMagiaMedia = 6;
let valorMagiaForte = 12;

module.exports = {};

module.exports.getValorMana = () => {
  return valorMana;
};

module.exports.setValorMana = (novoValorMana) => {
  valorMana = novoValorMana;
};

module.exports.getValorMagiaFraca = () => {
  return valorMagiaFraca;
};

module.exports.getValorMagiaMedia = () => {
  return valorMagiaMedia;
};

module.exports.getValorMagiaForte = () => {
  return valorMagiaForte;
};

module.exports.usarMagia = (tipo) => {
  if (tipo === "fraca") {
    module.exports.setValorMana(valorMana - valorMagiaFraca);
    return valorMana;
  } else if (tipo === "media") {
    module.exports.setValorMana(valorMana - valorMagiaMedia);
    return valorMana;
  } else if (tipo === "forte") {
    module.exports.setValorMana(valorMana - valorMagiaForte);
    return valorMana;
  }
};

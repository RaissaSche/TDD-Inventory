const barraMana = require("./barraMana");

module.exports = {};

module.exports.getQuantidadeMana = () => {
  return barraMana.getValorMana();
};

//tomar dano
//abrir inventario

module.exports.setQuantidadeMana = (novaQuantidadeMana) => {
  barraMana.setValorMana(novaQuantidadeMana);
};

module.exports.usarMagiaFraca = () => {
  return barraMana.usarMagia("fraca");
};

module.exports.usarMagiaMedia = () => {
  return barraMana.usarMagia("media");
};

module.exports.usarMagiaForte = () => {
  return barraMana.usarMagia("forte");
};

const barraMana = require("./barraMana");

module.exports = {};

module.exports.getQuantidadeMana = () => {
  return barraMana.getValorMana();
};

module.exports.setQuantidadeMana = (novaQuantidadeMana) => {
  return barraMana.setValorMana(novaQuantidadeMana);
};

//====
module.exports.upgradeLevel = () => {
  barraMana.upgrade();
  return barraMana.getValorMana();
};

module.exports.recargaTotal = () => {
  return barraMana.recargaTotal();
};

module.exports.recargaParcial = (param) => {
  return barraMana.recargaParcial(param);
};
//====

//tomar dano
//abrir inventario

module.exports.usarMagiaFraca = () => {
  return barraMana.usarMagia("fraca");
};

module.exports.usarMagiaMedia = () => {
  return barraMana.usarMagia("media");
};

module.exports.usarMagiaForte = () => {
  return barraMana.usarMagia("forte");
};

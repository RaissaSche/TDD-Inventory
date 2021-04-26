let itemsEquipados = [1];

module.exports = {};

module.exports.estaEquipado = (itemNum) => {
  for (i in itemsEquipados) {
    if (itemsEquipados[i] == itemNum) {
      return true;
    } else {
      return false;
    }
  }
};

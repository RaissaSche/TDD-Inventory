module.exports = {
  getValorMana: () => {
    return 30;
  },
  usarMagia: (param) => {
    if (param === "fraca") {
      return 27;
    } else if (param === "media") {
      return 24;
    } else if (param === "forte") {
      return 18;
    }
  },
};

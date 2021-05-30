const personagem = require("./personagem");
const barraMana = require("./barraMana");

jest.mock("./barraMana");

test("barra de mana inicializada com  valor 30", () => {
  expect(personagem.getQuantidadeMana()).toBe(30);
  expect(barraMana.getValorMana()).toBe(30);
});

test("usar magia fraca", () => {
  expect(personagem.usarMagiaFraca()).toBe(27);
  expect(barraMana.usarMagia("fraca")).toBe(27);
});

test("usar magia média", () => {
  expect(personagem.usarMagiaMedia()).toBe(24);
  expect(barraMana.usarMagia("media")).toBe(24);
});

test("usar magia forte", () => {
  expect(personagem.usarMagiaForte()).toBe(18);
  expect(barraMana.usarMagia("forte")).toBe(18);
});

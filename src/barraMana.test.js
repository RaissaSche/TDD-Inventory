const barraMana = require("./barraMana");

/*Bem, teriamos q definir uma variável para usarmos como sendo a barra d mana 
(acho q 30 seria legal) e teriamos como funcionalidades as 3 magias (fraca, média e forte)
 q quando usadas usam uma certa qtd d mana, um método d regarga parcial q aumenta o valor 
 sem passar do valor max (q seria usado caso o personagem usasse itens d regeneração d mana),
  um d recarga total sem passar do max (para caso d subida d nível e respawn) e um metodo d
  upgrade q aumenta o max da barra e a recarrega (caso subir d nivel e dê um upgrade em magia) */

test("barra de mana inicializada com  valor 30", () => {
  expect(barraMana.getValorMana()).toBe(30);
});

test("setar novo valor de mana", () => {
  barraMana.setValorMana(24);
  expect(barraMana.getValorMana()).toBe(24);
});

test("usar magia fraca", () => {
  let valorInicial = barraMana.getValorMana();
  expect(barraMana.usarMagia("fraca")).toBe(
    valorInicial - barraMana.getValorMagiaFraca()
  );
});

test("usar magia média", () => {
  let valorInicial = barraMana.getValorMana();
  expect(barraMana.usarMagia("media")).toBe(
    valorInicial - barraMana.getValorMagiaMedia()
  );
});

test("usar magia forte", () => {
  let valorInicial = barraMana.getValorMana();
  expect(barraMana.usarMagia("forte")).toBe(
    valorInicial - barraMana.getValorMagiaForte()
  );
});

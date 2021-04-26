const inventario = require("./inventario");

test("item 1 está equipado?", () => {
  expect(inventario.estaEquipado(1)).toBe(true);
});

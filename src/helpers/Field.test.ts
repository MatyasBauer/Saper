import { emptyFieldGenerator, fieldGenerator, CellState, Cell } from "./Field";

const { empty, bomb, hidden } = CellState;

const cellWithBombFilter = (cell: Cell) => cell === bomb;

describe("Field Generator", () => {
  describe("Empty field generator", () => {
    it("2x2 empty", () => {
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });
    it("3x3 hidden", () => {
      expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
      ]);
    });
  });
  describe("Field generator", () => {
    it("Wrong propability value", () => {
      const err = "Propability value must be between 0 and 1";
      expect(() => fieldGenerator(1, -1)).toThrow(err);
      expect(() => fieldGenerator(1, 2)).toThrow(err);
    });
    it("Smallest possible field without bomb", () => {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
    });
    it("Smallest possible field with bomb", () => {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
    });
    it("2x2 field with bombs", () => {
      expect(fieldGenerator(2, 1)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ]);
    });
    it("2x2 field with 50% propability", () => {
      const field = fieldGenerator(2, 0.5);
      const flatField = field.flat();

      const cellsWithBombs = flatField.filter((cell) => cell === bomb);
      const cellsWithoutBombs = flatField.filter((cell) => cell === 2);

      expect(cellsWithBombs).toHaveLength(2);
      expect(cellsWithoutBombs).toHaveLength(2);
    });
    it("10x10 with 1/4 bomb cells", () => {
      const size = 10;
      const bombs = 25;

      const propability = bombs / (size * size);
      const field = fieldGenerator(size, propability);

      console.table(field);

      const flatfield = field.flat();
      expect(flatfield.filter(cellWithBombFilter)).toHaveLength(bombs);
    });
  });
});

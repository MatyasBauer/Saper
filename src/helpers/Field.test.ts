import { emptyFieldGenerator, CellState } from "./Field";

const { empty, bomb, hidden } = CellState;

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
});

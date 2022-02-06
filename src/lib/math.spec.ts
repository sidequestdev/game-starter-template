import { sum } from "#/lib/math";

describe("math", () => {
  describe("sum", () => {
    it("should add numbers", () => {
      expect(sum(1, 2, 3)).toEqual(6);
    });
  });
});

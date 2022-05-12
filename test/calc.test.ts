import { add } from "../src/calc";

/**
 * This is a set of baseline tests... if these break, something bigger is wrong
 * with the jest configuration.
 */
describe("Add Numbers", () => {
    it("1 + 1 (snake eyes) better equal 2.", () => {
        expect(add(1, 1)).toBe(2);
    });

    it("So help me, if 4 + 4 (hard eight) doesn't equal 8.", () => {
        expect(add(4, 4)).toBe(8);
    });
});

const Candy = require("./candy");

describe("Candy Unit Test", () => {
  it("gets the name of the candy", () => {
    let candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe("Mars");
  });
  it("gets the price of the candy", () => {
    let candy = new Candy("Mars", 4.99);
    expect(candy.getPrice()).toEqual(4.99);
  });
});

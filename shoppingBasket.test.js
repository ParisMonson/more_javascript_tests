const ShoppingBasket = require("./shoppingBasket");

describe("ShoppingBasket Unit test", () => {
  it("adds an item", () => {
    let basket = new ShoppingBasket();
    candyDbl = { getName: () => "Mars", getPrice: () => 4.99 };
    basket.addItem(candyDbl);
    expect(basket.cart).toEqual([candyDbl]);
  });
  it("gets the total price when one item is added", () => {
    let basket = new ShoppingBasket();
    candyDbl = { getName: () => "Mars", getPrice: () => 4.99 };
    basket.addItem(candyDbl);
    expect(basket.getTotalPrice()).toBe(4.99);
  });
  it("gets the total price when two items are added", () => {
    let basket = new ShoppingBasket();
    candyDbl = { getName: () => "Mars", getPrice: () => 4.99 };
    candyDbl2 = { getName: () => "Snickers", getPrice: () => 5 };
    basket.addItem(candyDbl);
    basket.addItem(candyDbl2);
    expect(basket.getTotalPrice()).toBe(9.99);
  });
});

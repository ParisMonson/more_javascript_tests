class ShoppingBasket {
  constructor() {
    this.cart = [];
  }
  addItem(candy) {
    this.cart.push(candy);
  }
  getTotalPrice() {
    let total = 0;
    this.cart.forEach((item) => {
      total += item.price;
    });
    return total;
  }
}

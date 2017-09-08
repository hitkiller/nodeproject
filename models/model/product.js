class Product {
  constructor(species) {
    this.species = species;
  }
  describe() {
    console.log(`Product module: ${this.species}`)
  }
}
module.exports = Product;

class User {
  constructor(name) {
    this.name = name;
  }
  describe() {
    console.log(`User module: ${this.name}`)
  }
}
module.exports = User;

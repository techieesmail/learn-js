function sayHello(name) {
  this.name = name;
  console.log("Hello -- " + this.name);
}

export default { sayHello };

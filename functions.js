function Hello() {
  console.log("Hi! John Doe!");
}

    Hello();

 



function sayHello(user) {
  console.log(`Hello ${user}`);
}

sayHello("John");
sayHello("Mary");
sayHello("Stephen");



function sum(a, b) {
  return a + b;
}

const result = sum(20,16);

console.log(result);



function sayHello(name) {
  return `Merhaba ${name}`;
}
 

console.log(sayHello("John"));


//ARROW FUNCTION

const sum = (a, b) => { 
  return a + b;
};    //return çok satırda süslü parantez içinde yazılır

console.log(sum(5, 3));

const sum = (a, b) => a + b;  // return tek satırda otomatik olarak yapılır

console.log(sum(5, 3));


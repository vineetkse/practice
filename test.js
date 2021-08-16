// let x = 10; //integer type of variable
// let f = 10.5; //Float type variable
// let s = "vineet kumar"; // "vineet kumar" - string type

// function getAge() {
//   console.log(this);
//   let a = 10;
//   let b = 20;
//   let c = a + b;
//   console.log(c);
// }

// const getPrice = () => {
//   console.log(this);
//   console.log("get price called");
// };

// getAge();
// getPrice();

// (() => {
//   console.log("get price called");
// })();

const add = (a, b) => {
  return a + b;
};
let x = add(5, 6);
console.log(x);

let y = {
  name: "vineet kumar",
  age: 34,
  address: "3003, sai nandana gardenia",
};

console.log(y);

let c = [1, 2];
for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}

c.forEach((data) => {
  console.log(data);
});

if (c.length > 8) {
  console.log("lenght is greater than 9");
} else if (c.length < 3) {
  console.log("lenght is less than 3");
} else {
  console.log("lenght is not greater than 8");
}

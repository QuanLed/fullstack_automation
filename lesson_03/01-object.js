1;
let student = {
  name: "Quan",
  grades: {
    math: 10,
    english: 9,
  },
};

console.log(student["grades"]["math"]);

2;
let products = {
  Hat: "10$",
  Cup: "5$",
  "T-shirt": "20$",
  Jean: "50$",
  Shoes: "45$",
};

for (let product in products) {
  console.log(`Sản phẩm ${product} có giá là ${products[product]}`);
}

3;
let bike = {};
bike["color"] = "gray";
bike.color = "blue";

console.log(bike.color);

4;
let employee = {
  name: "Quan",
  age: 33,
};

delete employee.age;
console.log(employee);

5;
let school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};

console.log(school);

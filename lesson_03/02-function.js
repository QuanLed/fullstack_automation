1;
let height = 1.7;
let weight = 65;
let yourBMI = weight / (height * height);

function calculateBMI(yourBMI) {
  if (yourBMI < 18.5) {
    return "Thiếu cân";
  } else if (yourBMI < 25) {
    return "Bình thường";
  } else if (yourBMI < 30) {
    return "Thừa cân";
  } else {
    return "Béo phì";
  }
}

console.log(calculateBMI(yourBMI));

2;
let temperature = {
  value: 50,
  type: "F",
};
let result = {};

function convertTemperature(temperatureObj, resultObj) {
  if (temperatureObj.type == "C") {
    resultObj.value = (temperatureObj.value * 9) / 5 + 32;
    resultObj.type = "F";
  } else if (temperatureObj.type == "F") {
    resultObj.value = ((temperatureObj.value - 32) * 5) / 9;
    resultObj.type = "C";
  }
  console.log(
    `Kết quả chuyển đổi từ ${temperatureObj.value} độ ${temperatureObj.type} bằng ${resultObj.value} độ ${resultObj.type}`
  );
}

convertTemperature(temperature, result);

3;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterPrimeNumber(arr) {
  let arrPrimeNumber = [];
  for (let i of arr) {
    let isPrimeNumber = true;
    if (i > 1) {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          isPrimeNumber = false;
        }
      }
    } else {
      isPrimeNumber = false;
    }
    if (isPrimeNumber) {
      arrPrimeNumber.push(i);
    }
  }
  console.log(arrPrimeNumber);
}

filterPrimeNumber(arr);

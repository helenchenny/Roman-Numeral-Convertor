const numberInput = document.querySelector("#number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numbers = {
   "M" : 1000,
    "CM" : 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
}

const convertor = (num) => {
  let str = ""
 while (num > 0) {
 let index = Object.values(numbers).findIndex(x => num >= x)
 str += Object.keys(numbers)[index]
 num -= Object.values(numbers)[index]
 }
 return str
}

const checkUserInput = () => {
if(numberInput.value === "") {
    output.classList.remove("hidden")
    output.innerHTML = "Please enter a valid number"
    return
  }
  else if (numberInput.value < 1) {
    output.classList.remove("hidden")
    output.innerHTML = "Please enter a number greater than or equal to 1"
  }
  else if (numberInput.value >= 4000) {
    output.classList.remove("hidden")
    output.innerHTML = "Please enter a number less than or equal to 3999"}
    else {
      output.classList.remove("hidden")
      output.innerHTML = `${convertor(numberInput.value)}`
    }
};

convertBtn.addEventListener("click", checkUserInput);

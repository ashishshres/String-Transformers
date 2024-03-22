let input = document.querySelector("input");
let upperCase = document.querySelector("#uppercase");
let lowerCase = document.querySelector("#lowercase");
let camelCase = document.querySelector("#camelcase");

input.addEventListener("input", transformer);

function transformer() {
  upperCase.innerText = input.value.toUpperCase();
  lowerCase.innerText = input.value.toLowerCase();
  camelCase.innerText = toCamelCase(input.value);
}

function toCamelCase(input) {
  let lowercaseStr = input.toLowerCase();
  console.log(lowercaseStr);
  let camelCaseStr = lowercaseStr.split(" ").map((word, i) => {
    if (i == 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1, word.length);
    }
  });
  return camelCaseStr.join("");
}

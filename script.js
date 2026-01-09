button.addEventListener("click", () => {
  const prices = document.querySelectorAll(".price");
  let sum = 0;
  for (let price of prices) {
    // Convert contentEditable text to number safely
    sum += Number(price.innerText) || 0;
  }
  for (let price of prices) sum += Number(price.innerText) || 0;
  newData2.innerText = sum;
});
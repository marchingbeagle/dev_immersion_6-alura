function buttonPressed() {
  let button = document.getElementsByClassName("exchangeButton");
  let usdValue = Number(document.getElementById("value").value);
  let brlValue = (usdValue / 0.197238659).toFixed(2);
  let brlResult = document.querySelector(".brlValue");

  brlResult.innerHTML = `R$${brlValue}`;
}

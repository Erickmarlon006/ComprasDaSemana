var productIn = document.getElementById("productIn");
var addBtn = document.getElementById("addBtn");
var cleanBtn = document.getElementById("cleanBtn");
var answerPlace = document.getElementById("answerPlace");

var answer;
function adicionar() {
  var product = productIn.value;
  if (product == "" || !isNaN(product)) {
    alert("Insira um produto válido");
    productIn.focus();
    return;
  }
  if (localStorage.getItem("produtos")) {
    var shoppingProduct = localStorage.getItem("produtos") + ";" + product;
    localStorage.setItem("produtos", shoppingProduct);
  } else {
    localStorage.setItem("produtos", product);
  }
  mostrarLista();
  productIn.focus();
}
addBtn.addEventListener("click", adicionar);
function mostrarLista() {
  if (!localStorage.getItem("produtos")) {
    answerPlace.textContent = "";
    return;
  }
  answer = "";
  var productsList = localStorage.getItem("produtos").split(";");
  for (let i = 0; i < productsList.length; i++) {
    answer += productsList[i] + "\n";
    answerPlace.textContent =
      "Produtos Adicionados\n" + "-------------------------------\n" + answer;
    productIn.value = "";
  }

}
mostrarLista();

function limpar() {
  localStorage.removeItem("produtos");
  answerPlace.textContent = "";
}
cleanBtn.addEventListener("click", limpar);

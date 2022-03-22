function formReset() {
  document.getElementById("form_data").reset();
}

function total() {
  var flavor = document.getElementById("flavor").value;
  var size = document.getElementById("size").value;
  var crust = document.getElementById("crust").value;
  var bellpeppers = document.getElementById("bellpeppers").value;
  var brocoli = document.getElementById("brocoli").value;
  var mushroom = document.getElementById("mushroom").value;
  var pineapple = document.getElementById("pineapple").value;
  var numberOfPizzas = document.getElementById("number").value;
  var location = document.getElementById("delivery").value;

  costArray = [
    [1600, 1400, 1200],
    [1450, 1250, 1050],
    [1300, 1100, 900],
  ];

  const output = document.getElementById("message");

  formReset();
}

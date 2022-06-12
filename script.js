//valorx = 100
//valory = 2
//resultado = valorx / 2

//console.log(resultado)

function somar() {
  let x = document.getElementById("valorx").value;
  let y = document.getElementById("valory").value;
  console.log(x, y);
  z = parseFloat(x) + parseFloat(y);

  document.getElementById("resultado").value = z;
  console.log(z);
};

function subtrair() {
  let x = document.getElementById("valorx").value;
  let y = document.getElementById("valory").value;
  console.log(x,y);
  z = parseFloat(x) - parseFloat(y);

  document.getElementById("resultado").value = z;
  console.log(z);
};

function mutiplicar() {
  let x = document.getElementById("valorx").value;
  let y = document.getElementById("valory").value;
  console.log(x, y);
  z = parseFloat(x) * parseFloat(y);

  document.getElementById("resultado").value = z;
  console.log(z);
};

function dividir() {
  let x = document.getElementById("valorx").value;
  let y = document.getElementById("valory").value;
  console.log(x,y);
  z = parseFloat(x) / parseFloat(y);

  document.getElementById("resultado").value = z;
  console.log(z);
}
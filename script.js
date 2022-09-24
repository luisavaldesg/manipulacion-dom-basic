//const h1 = document.getElementByTagName("h1");
// const h1 = document.querySelector('h1');
// const p1 = document.querySelector('.p1');
// const p2 = document.querySelector('.p2');
// const pid = document.querySelector('#specialParagraph');
// const input = document.querySelector('input');

// console.log({
//     h1,p1,p2,pid,input
// });

// h1.innerHTML = 'patito';
// h1.innrtext = 'hello0';
// //p1.getAttribute('class');
// //console.log(p1.setAttribute('class','verde'));
// h1.classList.add('verde');
// h1.classList.remove('rojo');
// h1.classList.toggle('rojo');
// h1.classList.contains('rojo');
/* <div class="calculadora">
<!-- <form action=""> -->
    <label>Enter first number:</label>
    <input type="number" id="calculo1" placeholder="Number 1:">
    <label>Enter second number:</label>
    <input type="number" id="calculo2" placeholder="Number 2:">
    <!-- <input onchange="console.log('change this imput')" type="number" id="number2" placeholder="Number 2:"> -->
    <!-- <input type="submit" id="btnCalculate" value="Submit"> -->
    <!-- <button id="btnCalculate" onclick="calculate()">Calculate</button> -->
    <button id="btnCalcularSum">+</button>
    <button id="btnCalcularRest">-</button>
    <button id="btnCalcularMult">*</button>
    <button id="btnCalcularDiv">/</button>
<!-- </form> -->
</div> */
// input.value=123456;

//how to create an element with js

// const img = document.createElement('img');
// img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg/1200px-Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg')
// pid.appendChild(img);
//document.createElement('div');

//Calculator

// const input1 = document.querySelector('#number1');
// const input2 = document.querySelector('#number2');
// //const btnCalculate = document.querySelector('#btnCalculate');

// const btnCalcular = document.getElementById('calcular');
// const response = document.querySelector('#response');

// btnCalcular.addEventListener('click',calculate); //escuchador de eventos, escucha cada vez que suceda cierto evento

// function calculate(){
//     console.log('hi');
// }

// calculate();
// // function calculate() {

// //     response.innerHTML+=+input1.value + +input2.value + ' ';
// //     //console.log(+input1.value + +input2.value);
// // }

const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn1 = document.querySelector("#btnCalcularSum");
const btn2 = document.querySelector("#btnCalcularRest");
const btn3 = document.querySelector("#btnCalcularMult");
const btn4 = document.querySelector("#btnCalcularDiv");
const pResult = document.querySelector("#result");

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn1.addEventListener("click", sumarInputValues);
btn2.addEventListener("click", restarInputValues);
btn3.addEventListener("click", multiplicarInputValues);
btn4.addEventListener("click", dividirInputValues);

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();

  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
function restarInputValues(event) {
  // console.log({event});
  // event.preventDefault();

  const sumaInputs = input1.value - input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}

function multiplicarInputValues(event) {
  // console.log({event});
  // event.preventDefault();

  const sumaInputs = input1.value * input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}

function dividirInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs = input1.value / input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
//Por defecto el ultimo boton que tome sera el que agarre para escuchar el evento de
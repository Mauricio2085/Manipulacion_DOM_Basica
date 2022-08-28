const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

const result = document.querySelector('div');

//h1.innerHTML = 'Patito<br>feo';

/*const img = document.createElement('img');
img.setAttribute('src', 'IMG_2056.jpg')
console.log(img);

pid.innerHTML = "";
pid.append(img);*/

function btnCalculo(){
   let input1Number = Number(input1.value);
   let input2Number = Number(input2.value);
   let resultado = input1Number + input2Number; 

   result.innerText = 'El resultado es: ' + resultado;
}
const root = document.getElementById('root');

const calculatorContainer = document.createElement('div');
calculatorContainer.classList.add('calculator-container');

const calculatorOutput = document.createElement('div');
calculatorOutput.classList.add('calculator-output');

const prevOutput = document.createElement('div');
prevOutput.classList.add('prev-output');

const currentOutput = document.createElement('div');
currentOutput.classList.add('current-output');

// Array yang berisi informasi tentang tombol
let buttonsInfo = [
  { class: 'all-clear', text: 'AC' },
  { class: 'delete', text: 'CE' },
  { class: 'operation', text: '/' },
  { class: 'operation', text: '*' },
  { class: 'number', text: '7' },
  { class: 'number', text: '8' },
  { class: 'number', text: '9' },
  { class: 'operation', text: '-' },
  { class: 'number', text: '4' },
  { class: 'number', text: '5' },
  { class: 'number', text: '6' },
  { class: 'operation', text: '+' },
  { class: 'number', text: '1' },
  { class: 'number', text: '2' },
  { class: 'number', text: '3' },
  { class: 'row-span equals', text: '=' },
  { class: 'col-span number', text: '0' },
  { class: 'number', text: '.' },
];

root.appendChild(calculatorContainer);
calculatorContainer.appendChild(calculatorOutput);
calculatorOutput.appendChild(prevOutput);
calculatorOutput.appendChild(currentOutput);

// Membuat tombol-tombol dan menambahkannya ke dalam dokumen
buttonsInfo.forEach(function (buttonInfo) {
  let button = document.createElement('button');
  button.className = buttonInfo.class;
  button.textContent = buttonInfo.text;
  calculatorContainer.appendChild(button);
});

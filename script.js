const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const allClearButton = document.querySelector('.all-clear');
const prevOutputDisplay = document.querySelector('.prev-output');
const currentOutputDisplay = document.querySelector('.current-output');

class Kalkulator {
  constructor(teksOperanSebelum, teksOperanSekarang) {
    this.teksOperanSebelum = teksOperanSebelum;
    this.teksOperanSekarang = teksOperanSekarang;
    this.reset();
  }

  reset() {
    this.operanSaatIni = '';
    this.operanSebelum = '';
    this.operator = undefined;
  }

  hapusAngka() {
    this.operanSaatIni = this.operanSaatIni.toString().slice(0, -1);
  }

  tambahDigit(digit) {
    if (digit === '.' && this.operanSaatIni.includes('.')) return;
    this.operanSaatIni = this.operanSaatIni.toString() + digit.toString();
  }

  pilihOperator(operator) {
    if (this.operanSaatIni === '') return;
    if (this.operanSebelum !== '') {
      this.hitungHasil();
    }
    this.operator = operator;
    this.operanSebelum = this.operanSaatIni;
    this.operanSaatIni = '';
  }

  hitungHasil() {
    let hasilPerhitungan;
    const sebelum = parseFloat(this.operanSebelum);
    const saatIni = parseFloat(this.operanSaatIni);

    if (isNaN(sebelum) || isNaN(saatIni)) {
      return;
    }

    if (this.operator === '+') {
      hasilPerhitungan = sebelum + saatIni;
    } else if (this.operator === '-') {
      hasilPerhitungan = sebelum - saatIni;
    } else if (this.operator === '*') {
      hasilPerhitungan = sebelum * saatIni;
    } else if (this.operator === '/') {
      hasilPerhitungan = sebelum / saatIni;
    } else {
      return;
    }

    this.operanSaatIni = hasilPerhitungan;
    this.operator = undefined;
    this.operanSebelum = '';
  }

  tampilkanDigit(digit) {
    const stringDigit = digit.toString();
    const digitUtuh = parseFloat(stringDigit.split('.')[0]);
    const digitDesimal = stringDigit.split('.')[1];
    let tampilanUtuh;
    if (isNaN(digitUtuh)) {
      tampilanUtuh = '';
    } else {
      tampilanUtuh = digitUtuh.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (digitDesimal != null) {
      return `${tampilanUtuh}.${digitDesimal}`;
    } else {
      return tampilanUtuh;
    }
  }

  perbaruiTampilan() {
    this.teksOperanSekarang.innerText = this.tampilkanDigit(this.operanSaatIni);
    if (this.operator != null) {
      this.teksOperanSebelum.innerText = `${this.tampilkanDigit(this.operanSebelum)} ${
        this.operator
      }`;
    } else {
      this.teksOperanSebelum.innerText = '';
    }
  }
}

const calculator = new Kalkulator(prevOutputDisplay, currentOutputDisplay);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.tambahDigit(button.textContent);
    calculator.perbaruiTampilan();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.pilihOperator(button.textContent);
    calculator.perbaruiTampilan();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.hitungHasil();
  calculator.perbaruiTampilan();
});

allClearButton.addEventListener('click', () => {
  calculator.reset();
  calculator.perbaruiTampilan();
});

deleteButton.addEventListener('click', () => {
  calculator.hapusAngka();
  calculator.perbaruiTampilan();
});

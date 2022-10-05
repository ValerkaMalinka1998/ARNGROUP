const total1 = document.querySelector('.input-number__input1'),
  min1 = 1,
  max1 = 99;

// Уменьшаем на 1 
document.querySelector('.input-number__minus1').addEventListener('click', () => {
  if (total1.value > min1) {
    total1.value = +total1.value - 1;
  }
});

// Увеличиваем на 1 
document.querySelector('.input-number__plus1').addEventListener('click', () => {
if (total1.value < max1) {
  total1.value = +total1.value + 1;
  }
});

// Запрещаем ввод текста 
document.querySelectorAll('.input-number__input1').forEach(function(el) {
  el.addEventListener('input', function() {
    this.value = this.value.replace(/[^d]/g, '');
  });
});

const total2 = document.querySelector('.input-number__input2'),
  min2 = 1,
  max2 = 99;
// Уменьшаем на 1 
document.querySelector('.input-number__minus2').addEventListener('click', () => {
  if (total2.value > min2) {
    total2.value = +total2.value - 1;
  }
});

// Увеличиваем на 1 
document.querySelector('.input-number__plus2').addEventListener('click', () => {
if (total2.value < max2) {
  total2.value = +total2.value + 1;
  }
});

// Запрещаем ввод текста 
document.querySelectorAll('.input-number__input2').forEach(function(el) {
  el.addEventListener('input', function() {
    this.value = this.value.replace(/[^d]/g, '');
  });
});
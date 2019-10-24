const container = document.querySelector('.container')

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
    const button = document.createElement('button') 
    const number = Math.floor(Math.random() * (4 - 1)) + 1
    button.setAttribute('data-x', j)
    button.setAttribute('data-y', i)
    button.innerHTML = number
    container.appendChild(button)

    button.addEventListener('click', buttonClick)
  }  
}

function buttonClick() {  
  const number = +this.innerHTML;
  const x = +this.getAttribute('data-x');
  const y = +this.getAttribute('data-y');
  if(number == 1) {
    buttonColor(1, x, y, 'green')
  }
  else if(number == 2) {
    buttonColor(2, x, y, 'blue')
  }
  else if(number == 3) {
    buttonColor(3, x, y, 'red')
  }
}

function buttonColor(step, x, y, color) {
  for (let i = (x-step); i <= (x+step); i++) {
    for (let j = (y-step); j <= (y+step); j++) {
      const button = document.querySelector('button[data-x="' + i + '"][data-y="' + j + '"]' )
      if(button) {
        button.style.background = color;
      }
    }    
  }
}
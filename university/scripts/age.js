const intro = document.querySelector('.intro')
const userAge = prompt('Сколько вам лет?')

if (userAge < 25) {
  intro.classList.toggle('young')
} else if (userAge >= 25 && userAge < 35) {
  intro.classList.toggle('average')
}
const infoCards = document.querySelectorAll('.info_card')
const accordeonHandler = document.querySelectorAll('.info_header')

accordeonHandler.forEach((accHandler, index) => {
  accHandler.addEventListener('click', () => {
    if (infoCards[index].classList.contains('show')) {
      infoCards[index].classList.toggle('show')
    } else {
      infoCards.forEach(card => card.classList.remove('show'))
      infoCards[index].classList.toggle('show')
    }
  })
})
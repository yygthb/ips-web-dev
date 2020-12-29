const ANIMATED_BLOCK_OFFSET = 300
const troubleFirst = '.trouble_first'
const troubleSecond = '.trouble_second'
const skill = '.skill'

function setBodyLoaded() {
    let body = document.querySelector('body')
    body.classList.add('loaded')
}

function setAnimatedBlockLoaded(selector) {
    window.addEventListener('scroll', function () {
        let reached = false
        const animatedBlock = document.querySelector(selector)
        const animatedBlockOffset = animatedBlock.offsetTop
        const windowHeight = window.innerHeight
        let scrolled = window.pageYOffset
        if (scrolled + windowHeight > animatedBlockOffset + ANIMATED_BLOCK_OFFSET) {
            if (!reached) {
                animatedBlock.classList.add('loaded')
                reached = true
            }
        }
    })
}
function collectAnimatingBlocks() {
    setBodyLoaded()
    setAnimatedBlockLoaded(troubleFirst)
    setAnimatedBlockLoaded(troubleSecond)
    setAnimatedBlockLoaded(skill)
}

window.addEventListener('load', collectAnimatingBlocks)
const socialButtons = document.querySelectorAll('.social')
const socialIcons = document.querySelectorAll('.social i')

const twitterButton = document.querySelector('.twitter')
const githubButton = document.querySelector('.github')
const redditButton = document.querySelector('.reddit')

socialIcons.forEach(icon => {
    icon.classList.add('fs-4')
})
socialButtons.forEach(button => {
    button.classList.add('border', 'border-3', 'rounded')
})
twitterButton.addEventListener('click', () => window.open('https://twitter.com/gabrielvr001'))
githubButton.addEventListener('click', () => window.open('https://github.com/GabrielCrackPro'))
redditButton.addEventListener('click', () => window.open('https://reddit.com/user/gabrielvr01'))

//Freatured projects
const pokefinderVisit = document.querySelector('#pokefinder-visit')
const pokefinderCode = document.querySelector('#pokefinder-code')

const triviaVisit = document.querySelector('#trivia-visit')
const triviaCode = document.querySelector('#trivia-code')

const beerVisit = document.querySelector('#beer-visit')
const beerCode = document.querySelector('#beer-code')

pokefinderVisit.addEventListener('click', () => window.open('http://pokefinderapp.surge.sh'))
pokefinderCode.addEventListener('click', () => window.open('http://github.com/GabrielCrackPro/pokemon-api-app'))

triviaVisit.addEventListener('click', () => window.open('http://trivial-app.surge.sh'))
triviaCode.addEventListener('click', () => window.open('http://github.com/GabrielCrackPro/trivia-app'))

beerVisit.addEventListener('click', () => window.open('http://beercounter.surge.sh'))
beerCode.addEventListener('click', () => window.open('http://github.com/GabrielCrackPro/beer-counter'))

//All projects
const wordsVisit = document.querySelector('#words-visit')
const wordsClone = document.querySelector('#words-clone')

const gVisit = document.querySelector('#g-visit')
const gClone = document.querySelector('#g-clone')

const dVisit = document.querySelector('#d-visit')
const dClone = document.querySelector('#d-clone')

const clockVisit = document.querySelector('#clock-visit')
const clockCode = document.querySelector('#clock-clone')

wordsVisit.addEventListener('click', () => window.open('http://wordsapi.surge.sh'))
wordsClone.addEventListener('click', () => window.open('https://github.com/GabrielCrackPro/Words-API-App'))

gVisit.addEventListener('click', () => window.open('http://cloned-google.surge.sh'))
gClone.addEventListener('click', () => window.open('https://github.com/GabrielCrackPro/Google-Simulator'))

dVisit.addEventListener('click', () => window.open('http://duckduckgoclone.surge.sh'))
dClone.addEventListener('click', () => window.open('https://github.com/GabrielCrackPro/duckduckgo-Simulator'))

clockVisit.addEventListener('click', () => window.open('http://real-time-clock.vercel.app'))
clockCode.addEventListener('click', () => window.open('https://github.com/GabrielCrackPro/RealTime-Clock'))
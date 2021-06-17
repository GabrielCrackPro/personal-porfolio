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
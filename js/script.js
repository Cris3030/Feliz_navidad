const container = document.querySelector('#camvas')
const ballOne = document.querySelector('#ballOne')
const ballTwo = document.querySelector('#ballTwo')
const ballThree = document.querySelector('#ballThree')
const noel = document.querySelector('#noel')

container.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidht / 2 + e.pageX) / 50
	let yAxis = (window.innerHeight / 2 - e.pageY) / 50
	noel.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
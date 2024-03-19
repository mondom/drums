// const keyA = document.querySelector('.key')
// const keyA = document.querySelector('[data-number="25"]')

window.addEventListener('keydown', e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

	if (!audio) return
	audio.currentTime = 0  
  
	audio.play()

	const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

	key.classList.add('playing')
})



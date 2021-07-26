document.querySelectorAll('.day-row').forEach( x => {
	for (let i = 0; i <= 52; i++) {
		let day = document.createElement('div')
		day.classList.add('day')
		day.classList.add('day-'+i)
		x.appendChild(day)
	}
})
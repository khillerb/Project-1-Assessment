const plusCalc = document.getElementById("plusCalc");
const incrementer = document.getElementById("incrementer")
const minusCalc = document.getElementById("minusCalc");
const countatt = document.querySelector('[count-data]');
let base = 0;

const plusInc = () => {
	base = parseInt(countatt.innerText) 
	base += parseInt(incrementer.value)
	countatt.innerText = base
	if (base >= 0) {
		countatt.classList.remove('neg')
		countatt.classList.add('pos')
	} else {
		countatt.classList.remove('pos')
		countatt.classList.add('neg')
	}
}
const minusInc = () => {
	base = parseInt(countatt.innerText) 
	base -= parseInt(incrementer.value)
	countatt.innerText = base
	if (base >= 0) {
		countatt.classList.remove('neg')
		countatt.classList.add('pos')
	} else {
		countatt.classList.remove('pos')
		countatt.classList.add('neg')
	}
}
plusCalc.addEventListener('click', plusInc);
minusCalc.addEventListener('click', minusInc);


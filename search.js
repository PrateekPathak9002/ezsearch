function search(searchOBJS,input) {

	if (searchOBJS.includes('#')) {/*Checks that the second arguement is a class .*/
		console.error('search.js: search function only accepts an class as second argument')
		return false
	}

	let sOBJS = document.querySelectorAll(searchOBJS)
	if (sOBJS[0] == undefined) {
		console.warning('search.js: The given class does not have any elements associated with it .')
		return false
	}


	let inputLc = document.querySelectorAll(input)[0] /*Lc stands for local*/
	if (inputLc == undefined) {
		console.error('search.js: The given id for the input does not have a input associated with it .')
	}

	console.log('Search :No errors in the arguments .')
	inputLc.addEventListener('input',()=>{
		for(var i = 0 ; i < sOBJS.length ; i++ ){
			if (!(sOBJS[i].innerHTML.includes(inputLc.value))) {
				sOBJS[i].style.position = 'absolute'
				sOBJS[i].style.visibility = 'hidden'
				console.log(`${sOBJS[i].innerHTML} and input is ${inputLc.value} `)
			}else {
				sOBJS[i].style.position = 'relative'
				sOBJS[i].style.visibility = 'visible'
			}
		}
		
	})
}
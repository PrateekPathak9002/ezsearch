
function search_debug(searchOBJS,sOBJS,inputLc,input) {
	if (searchOBJS.includes('#')) {/*Checks that the first arguement is a class .*/
		console.error('search.js: search function only accepts an class as second argument')
		return false
	}

	if (sOBJS[0] == undefined) {
		console.warn('search.js: The given class does not have any elements associated with it .')
		return false
	}

	if (inputLc == undefined) {
		console.error('search.js: The given id for the input does not have a element associated with it .')
		return false
	}
	
	console.log('search.js :No errors in the arguments .')
	
}

function search(searchOBJS,input,options={debug:true}) {

	let sOBJS = document.querySelectorAll(searchOBJS)
	let inputLc = document.querySelectorAll(input)[0] /*Lc stands for local*/

	if (options.debug) {
		return search_debug(searchOBJS,sOBJS,inputLc,input)
	}

	inputLc.addEventListener('input',()=>{
		for(var i = 0 ; i < sOBJS.length ; i++ ){
			if (!(sOBJS[i].innerHTML.includes(inputLc.value))) {
				sOBJS[i].style.position = 'absolute'
				sOBJS[i].style.visibility = 'hidden'
				
			}else {
				sOBJS[i].style.position = 'relative'
				sOBJS[i].style.visibility = 'visible'
			}
		}
		
	})
}


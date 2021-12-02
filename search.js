function search(wrapper,searchOBJS,input) {
	if (!(typeof wrapper === 'object')) {
		console.error('search function only accepts an html element as first argument')
		return false
	}
	if (searchOBJS[0] === undefined) {
		console.error('search function only accepts an html nodelist as second argument . Use document.querySelectorAll(".myClass") instead.')
		return false
	}
	if (!(typeof input === 'object')) {
		console.error('search function only accepts an html element as third argument')
		return false
	}
	console.log('Search :No errors in the arguments .')
	input.addEventListener('input',()=>{
		for(var i = 0 ; i < searchOBJS.length ; i++ ){
			if (!(searchOBJS[i].innerHTML.includes(input.value))) {
				searchOBJS[i].style.position = 'absolute'
				searchOBJS[i].style.visibility = 'hidden'
				console.log(`${searchOBJS[i].innerHTML} and input is ${input.value} `)
			}else {
				searchOBJS[i].style.position = 'relative'
				searchOBJS[i].style.visibility = 'visible'
			}
		}
		
	})
	wrapper.querySelectorAll('p')	
}
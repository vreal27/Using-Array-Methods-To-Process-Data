
var avg = items.reduce(function(a,b){
	return a + b.price 
},0) / items.length 

document.querySelector("#answer1").innerHTML = `The average price is $${avg.toFixed(2)}`

var cost = items.filter(function(item){
	if (item.price >= 14 && item.price <= 18 && item.currency_code === "USD"){
		return true 
	} else {
		return false 
	}
}).map(function(item){
	return item.title
}).join(`\n`)

document.querySelector("#answer2").innerHTML = `${cost}`


var code = items.filter(function(item){
	if(item.currency_code === "GBP"){
		return true
	} else {
		return false 
	}
})


document.querySelector("#answer3").innerHTML = `${code[0].title} \u00A3${code[0].price}`  

var wood = items.filter(function(item){
	if(item.materials.includes("wood")){
		return true 
	} else {
		return false 
	}
}).map(function(item){
	return item.title 
}).join('\n')

document.querySelector("#answer4").innerHTML = `${wood}`  


var strdisplay = ""

var composition = items.filter(function(item){
	if(item.materials.length >= 8){
		return true
	} else {
		return false
	}
}).forEach(function(item){
	strdisplay += item.title + "\n"
	strdisplay += item.materials.length + "\n"
	item.materials.forEach(function(material){
		strdisplay += material + "\n"
	})
})

document.querySelector("#answer5").innerHTML = strdisplay  


var madeby = items.filter(function(item){
	if(item.who_made === "i_did"){
		return true
	} else {
		return false
	}
}) 

document.querySelector("#answer6").innerHTML = `${madeby.length} were made by their sellers`




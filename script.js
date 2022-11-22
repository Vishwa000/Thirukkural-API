let div = document.createElement('div')
div.setAttribute('id','div')
div.classList.add('container','ms-5')
document.body.appendChild(div)

let h1 = document.createElement('h1')
h1.innerHTML = 'திருக்குறள்';
document.getElementById('div').appendChild(h1)

let h2 = document.createElement('h4')
h2.innerHTML = 'Search Thirukkural 1 - 1330';
document.getElementById('div').appendChild(h2)

let searchDiv = document.createElement('form')
searchDiv.setAttribute('id','searchDiv')
document.getElementById('div').appendChild(searchDiv)


let searchBox = document.createElement('input')
searchBox.setAttribute('type','text')
searchBox.setAttribute('id','1')
searchBox.setAttribute('placeholder','திருக்குறள் 1 - 1330')
searchBox.setAttribute("onkeyup",'funtn(searchBox.value)')
searchBox.setAttribute("onkeypress",'typing()')
searchBox.classList.add('mb-2')
document.getElementById('searchDiv').appendChild(searchBox)


let displayDiv = document.createElement('div')
displayDiv.setAttribute('id','displayDiv')
displayDiv.classList.add('col','col-sm-12')
document.getElementById('div').appendChild(displayDiv)

chapgrp_tam=document.createElement("p")

sect_tam=document.createElement("p")

number=document.createElement("p")

chap_tam=document.createElement("p")

line1=document.createElement("p")

line2=document.createElement("p")

tam_exp=document.createElement("p")

eng_exp=document.createElement("p")

sect_eng=document.createElement("p")

chapgrp_eng=document.createElement("p")

eng=document.createElement("p")

chap_eng=document.createElement("p")


function funtn(x){
	if(x>0 && x<=1330){
		let y=parseInt(x)
	
	
	fetch(`https://api-thirukkural.vercel.app/api?num=${y}`)
	.then((a)=>a.json())
	.then((res)=>
	{
	number.innerHTML=`<span id="style">Kural Number:</span> ${res.number}<br>`
    displayDiv.appendChild(number)

	sect_tam.innerHTML=`<span id="style">Section:</span> ${res.sect_tam}<br>`
    displayDiv.appendChild(sect_tam)

	chapgrp_tam.innerHTML=`<span id="style">Group:</span> ${res.chapgrp_tam}<br>`
    displayDiv.appendChild(chapgrp_tam)
    
    chap_tam.innerHTML=`<span id="style">Adhigaram:</span> ${res.chap_tam}<br>`
    displayDiv.appendChild(chap_tam)
    
    line1.innerHTML=`<span id="style">Kural:</span><br> ${res.line1}<br>`
    displayDiv.appendChild(line1)
    
    line2.innerHTML=`${res.line2}<br>`
    displayDiv.appendChild(line2)
    
    tam_exp.innerHTML=`<span id="style">Tamil Explanation:</span> ${res.tam_exp}<br>`
    displayDiv.appendChild(tam_exp)

	sect_eng.innerHTML=`<span id="style">Section in English:</span> ${res.sect_eng}<br>`
    displayDiv.appendChild(sect_eng)

	chapgrp_eng.innerHTML=`<span id="style">Group in English:</span> ${res.chapgrp_eng}<br>`
    displayDiv.appendChild(chapgrp_eng)

	chap_eng.innerHTML=`<span id="style">Chapter in English:</span> ${res.chap_eng}<br>`
    displayDiv.appendChild(chap_eng)
    
    eng.innerHTML=`<span id="style">Kural in English:</span> ${res.eng}<br>`
    displayDiv.appendChild(eng)

    eng_exp.innerHTML=`<span id="style">English Explanation:</span> ${res.eng_exp}<br>`
    displayDiv.appendChild(eng_exp)
})
    }
else if(x>1330)
alert("please enter number between 1 - 1330")


 }
 function typing(){
    let show = document.getElementById("searchBox");
    if(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*"){
       show.value += key;
    }
    else if(event.key==="Enter"){
        equal();
    }
    else{
     alert("Type Only Numbers");
      event.preventDefault();
    }
    
}
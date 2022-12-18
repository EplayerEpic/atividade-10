

   //header

var header_antigo = document.querySelector('header')

header_antigo.id = "header_id";

var nova_div1 = document.createElement("div")

var novo_h1 = document.createElement("h1")

novo_h1.id = "novo_h1"

var texto = document.createTextNode("Bem vindos ao nosso show!")


novo_h1.appendChild(texto)



nova_div1.appendChild(novo_h1)

header_antigo.appendChild(nova_div1)

document.body.appendChild(header_antigo)


//main (div)

var antiga_main = document.querySelector("main")

var nova_div2 = document.createElement('div')

var nova_div3 = document.createElement("div")

// h2

let novo_h2 = document.createElement("h2")

let novo_h3 = document.createElement("h3") 

//p

let novo_p = document.createElement("p")

let novo_p2 = document.createElement("p")

//textos

let texto1 = document.createTextNode("Bem vindos ao grande show!")

let texto2 = document.createTextNode("Porfavor sentem-se em sues acentos e aguardem o show começar")

let texto3 = document.createTextNode("Porfavor aguardem mais um pouco par ao show começar")

let texto4 = document.createTextNode("Bom show!")

// adiçoes do h2

novo_h2.appendChild(texto1)

novo_p.appendChild(texto2)

nova_div2.appendChild(novo_h2)

nova_div2.appendChild(novo_p)

nova_div2.id = "nova_div2"

document.body.appendChild(nova_div2)

//adiçoes do h3

novo_h3.appendChild(texto3)

novo_p2.appendChild(texto4)

nova_div3.appendChild(novo_h3)

nova_div3.appendChild(novo_p2)

nova_div3.id = "nova_div3"

document.body.appendChild(nova_div3)

//inframe


var iframe = document.querySelector("#iframe")

iframe.id = "iframe"

document.body.appendChild(iframe)

//Créditos


var div4 = document.createElement("Div")

div4.id = "div4"

var texto5 = document.createTextNode("Créditos do video acima => Iron Master")

div4.appendChild(texto5)

document.body.appendChild(div4)






// atenção , aqui embaixo você encontrara a minha primeira tentativa se fazer o codigo, esse auqi de cima eu melhorei e organizei!

/*
 var antiga_main = document.querySelector("main")

 var nova_div2 = document.createElement("div")

 var nova_div3 = document.createElement("div")

 var novo_h2 = document.createElement("h2")

 var novo_h3 = document.createElement("h3")

 
 var novo_p = document.createElement("p")

 var novo_p2 = document.createElement("p2")

 var texto_p = document.createTextNode("Porfavor,sentem-se em seus acentos por que o show! ira começar!")

var texto_p2 = document.createTextNode("Bom Show!")

 var texto1 = document.createTextNode("Bem vindos!")

 var texto2 = document.createTextNode("O Show ira começar, porfavor aguardem" )





 // h2

 

 novo_h2.appendChild(texto1)

novo_p.appendChild(texto_p)




//h2



//h3

novo_p2.appendChild(texto_p2)

novo_h3.appendChild(texto2) 



//h3



nova_div2.appendChild(novo_h2)

nova_div2.appendChild(novo_p)

nova_div2.id = "div2_id"

nova_div3.appendChild(novo_h3)

nova_div3.appendChild(novo_p2)

nova_div3.id = "div3_id"


document.body.appendChild(nova_div2)

document.body.appendChild(nova_div3) 




var iframe = document.querySelector("#iframe")

document.body.appendChild(iframe)*/


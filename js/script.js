var  ProductOne = "Trip to London";
var  ProductTwo = "Trip to Amsterdam";
var London = 2360;
var Amsterdam = 1189;
var sum = London+Amsterdam;
var result =sum-(sum*10/100);
console.log(sum);
document.write("<p>If you want to buy a <b>Flight"+ProductOne.substring(4)+ "</b> and a <b>Flight"+ProductTwo.substring(4) +"</b>, it costs:</p><p> "+sum+" EUR</p><hr>");

document.write("<p>If you want to buy a <b>Flight"+ProductOne.substring(4)+ "</b> and a <b>Flight"+ProductTwo.substring(4) +"</b>, it costs:</p><p> "+sum
	+" EUR</p><p>If you want to buy a <b>Flight"+ProductOne.substring(4)+ "</b> and a <b>Flight"+ProductTwo.substring(4)+"</b> as a GoldenCard holder, you will get a 10% discount:</p><p>"+result+" EUR</p>");

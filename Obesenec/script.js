
var randomNum = Math.floor((Math.random() * 60) + 1);
var answer;
var inputField = document.getElementById('inputField');
var answerHtml = document.getElementById('answerDiv');
var compareButton = document.getElementById('guessButton');
var guessLeft = document.getElementById('guessLeftSpan');
var result = document.getElementById('result');
var usedDiv = document.getElementById('used');

switch(randomNum) {
    case 1:answer = 'PEZINOK';break;
    case 2:answer = 'BRATISLAVA';break;
    case 3:answer = 'MARTIN';break;
    case 4:answer = 'NITRA';break;
    case 5:answer = 'BARDEJOV';break;
    case 6:answer = 'ZILINA';break;
    case 7:answer = 'REVUCA';break;
    case 8:answer = 'POPRAD';break;
    case 9:answer = 'SKALICA';break;
    case 10:answer = 'HUMENNE';break;
    case 11:answer = 'DOLNY KUBIN';break;
    case 12:answer = 'RUZOMBEROK';break;
    case 13:answer = 'STARA LUBOVNA';break;
    case 14:answer = 'ZIAR NAD HRONOM';break;
    case 15:answer = 'NOVE ZAMKY';break;
    case 16:answer = 'HLOHOVEC';break;
    case 17:answer = 'VELKE KAPUSANY';break;
    case 18:answer = 'MOLDAVA NAD BODVOU';break;
    case 19:answer = 'SPISSKA NOVA VES';break;
    case 20:answer = 'KOSICE';break;
    case 21:answer = 'TREBISOV';break;
    case 22:answer = 'KEZMAROK';break;
    case 23:answer = 'ZVOLEN';break;
    case 24:answer = 'PARTIZANSKE';break;
    case 25:answer = 'VELKY KRTIS';break;
    case 26:answer = 'STROPKOV';break;
    case 27:answer = 'SECOVCE';break;
    case 28:answer = 'RIMAVSKA SOBOTA';break;
    case 29:answer = 'LIPTOVSKY MIKULAS';break;
    case 30:answer = 'BANSKA STIAVNICA';break;
    case 31:answer = 'DUDINCE';break;
    case 32:answer = 'MICHALOVCE';break;
    case 33:answer = 'KYSUCKE NOVE MESTO';break;
    case 34:answer = 'PUCHOV';break;
    case 35:answer = 'ZLATE MORAVCE';break;
    case 36:answer = 'GALANTA';break;
    case 37:answer = 'KREMNICA';break;
    case 38:answer = 'TREBISOV';break;
    case 39:answer = 'DUBNICA NAD VAHOM';break;
    case 40:answer = 'LEVOCA';break;
    case 41:answer = 'POPRAD';break;
    case 42:answer = 'PRIEVIDZA';break;
    case 43:answer = 'STUROVO';break;
    case 44:answer = 'GIRALTOVCE';break;
    case 45:answer = 'KRALOVSKY CHLMEC';break;
    case 46:answer = 'BANOVCE NAD BEBRAVOU';break;
    case 47:answer = 'NOVA BANA';break;
    case 48:answer = 'SAMORIN';break;
    case 49:answer = 'NAMESTOVO';break;
    case 50:answer = 'HANDLOVA';break;
    case 51:answer = 'BREZNO';break;
    case 52:answer = 'SOBRANCE';break;
    case 53:answer = 'PRESOV';break;
    case 54:answer = 'DETVA';break;
    case 55:answer = 'MALACKY';break;
    case 56:answer = 'TRENCIN';break;
    case 57:answer = 'TRSTENA';break;
    case 58:answer = 'ROZNAVA';break;
    case 59:answer = 'HANUSOVCE NAD TOPLOU';break;
    case 60:answer = 'BANSKA BYSTRICA';break;
} 

console.log(answer);
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(90,390);
ctx.lineTo(90,80);
ctx.lineWidth = 8;
ctx.stroke();

ctx.moveTo(10,390);
ctx.lineTo(170,390);
ctx.lineWidth = 8;
ctx.stroke();

ctx.moveTo(86,80);
ctx.lineTo(215,80);
ctx.lineWidth = 8;
ctx.stroke();

ctx.moveTo(215,80);
ctx.lineTo(215,140);
ctx.lineWidth = 4;
ctx.stroke();


for(i=0;i<answer.length;i++) {
    if(answer[i] === ' ') {
        answerHtml.innerText += '-';
    }
    else {
        answerHtml.innerText += '_';
    }
 }
 answerHtml.innerText = answerHtml.innerText.replace(/-/g, ' ');

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function enterPress(e) {
    if(e.which === 13) {
      compare();
    }
  }

var guessCount = 0;

function compare() {
    var found = 0;
    
    inputField.value = inputField.value.toUpperCase();

    //checking if the word is matching the answer
    if(inputField.value.length > 1) {
        if(inputField.value === answer) {
            answerHtml.innerHTML = answer;
            result.innerHTML = 'Správne!';
            inputField.disabled = true;
            compareButton.disabled = true;
            guessCount--;
            
        }
    }

    //checking for matches one by one
    for(i=0;i<answer.length;i++){
        if(inputField.value == answer.charAt(i)) {
            answerHtml.innerHTML = answerHtml.innerHTML.replaceAt(i, inputField.value);
            found++;
        }
    }
    

//printing results
    if(found==0)
    guessCount++;
    guessLeft.innerHTML = 7-guessCount;
    
    //decision when 1 guess left
    if(guessCount==7) {
        if(answerHtml.innerHTML === answer)
        result.innerHTML = 'Správne!';
        else {
        result.innerHTML = 'Neuhádol si :(';
        answerHtml.innerText = answer;
        }
        inputField.disabled = true;
        compareButton.disabled = true;
    }

    if(answerHtml.innerHTML==answer && guessCount<7) {
    result.innerHTML = 'Správne!';
    inputField.disabled = true;
    compareButton.disabled = true;
    }

    if(result.innerHTML == 'Správne!') {
        result.style.color = '#2EC700';
    }
    else {
        result.style.color = '#F52100';
    }

    //Checking used letters
    if(inputField.value.length===1) { 
   
        if(usedDiv.innerHTML == '') {
            usedDiv.innerHTML = inputField.value + ', ';
        }
        else {

        var match = 0;
        for(i=0;i<usedDiv.innerHTML.length;i=i+3) {
            if(inputField.value === usedDiv.innerHTML[i]) {
                match++;
            }
        }
        if(match==0) {
            usedDiv.innerHTML += inputField.value + ', ';
        }
    }
}
inputField.value = '';



if(guessCount < 8 && guessCount > 0) {
    ctx.beginPath();
    ctx.arc(215,160,20,0,2*Math.PI);
    ctx.stroke();
}

if(guessCount < 8 && guessCount > 1) {
    ctx.moveTo(215,180);
    ctx.lineTo(215,200);
    ctx.lineWidth = 4;
    ctx.stroke();
    
}

if(guessCount < 8 && guessCount > 2) {
    ctx.moveTo(215,200);
    ctx.lineTo(170,185);
    ctx.lineWidth = 4;
    ctx.stroke();
    
}

if(guessCount < 8 && guessCount > 3) {
    ctx.moveTo(215,200);
    ctx.lineTo(260,185);
    ctx.lineWidth = 4;
    ctx.stroke();
    
}

if(guessCount < 8 && guessCount > 4) {
    ctx.moveTo(215,200);
    ctx.lineTo(215,260);
    ctx.lineWidth = 4;
    ctx.stroke();
    
}

if(guessCount < 8 && guessCount > 5) {
    ctx.moveTo(215,260);
    ctx.lineTo(170,300);
    ctx.lineWidth = 4;
    ctx.stroke();
    
}

if(guessCount < 8 && guessCount > 6) {
    ctx.moveTo(215,260);
    ctx.lineTo(260,300);
    ctx.lineWidth = 4;
    ctx.stroke();
    
}

}





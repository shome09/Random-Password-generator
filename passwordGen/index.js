const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let le=characters.length;
let pass1="";
let pass2="";

function genRandom(){
    return (Math.floor(Math.random()*le));
}

function genPass(){
    for(let i=1;i<=15;i++){
        let ran1=genRandom();
        pass1=pass1+characters[ran1];
        let ran2=genRandom();
        pass2=pass2+characters[ran2];
    }
    document.getElementById('passone').textContent=pass1;
    document.getElementById('passtwo').textContent=pass2;
    pass1="";
    pass2="";
}
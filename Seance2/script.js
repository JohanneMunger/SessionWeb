const p = document.getElementById('weirdMessage');

console.log(p.innerHTML);


const constante = ""; // 
var global = "";
let scopeVariable = "";

function Johanne()
{
    var x = 'ahmed';
    let y = "johanne";
    // traitement 
    //  tout ca ca s'appele un block ou bien une Scope 
    console.log(y);
}

// type de varible 
// number
// string
// boolean
//  

const citoyen = false;

const age = 21;
const avoir18ans = age >= 18


const passwort = avoir18ans && citoyen;

// Functions 

const fn1 = function ABC(parms)
{
    // traitemtn
}
// ABC();// FAUX 
fn1()

// ############ ARROW FUNCTION ############
const WordLength = (nimportequoi) =>
{
    console.log(nimportequoi);
    return nimportequoi.length
}
const WordDisplayer = (nimportequoi) =>
{
    if (!nimportequoi) {
        const name = prompt('T as passé la valuer , veuiller intoduire le name')
        console.log(name);
        return "quelquechose";
    }
    console.log(nimportequoi);
    return "quelquechosedautere"


    // traitemnt

}
const result = WordDisplayer() // quelquechose
const result2 = WordDisplayer("value1") // quelquechosedautere



// different CAse of False
false || "" || 0 || !true || undefined || null || !"nimporte"

const returnLengthOfTheWOrd = (word) => word.length

const Lentghht = returnLengthOfTheWOrd("ahmed")
// ABC();// FAUX 
fn1()
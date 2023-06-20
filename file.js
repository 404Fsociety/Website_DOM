var favs = Array.from(document.querySelectorAll(".fa-heart"))
var plusBTNS =Array.from(document.querySelectorAll(".fa-circle-plus"))
var minusBTNS =Array.from(document.querySelectorAll(".fa-circle-minus"))
var DLTS = Array.from(document.querySelectorAll(".fa-xmark"))
var cards= Array.from(document.querySelectorAll(".card"))


//Add product to favorite list
for(let fav of favs)
{
    fav.addEventListener("click",function(){
        if(fav.style.color!="red"){
            (fav.style.color="red")
        }else{(fav.style.color="black")}

        })
}
//Add qte of Product to card
console.log(favs)

for(let plusbtn of plusBTNS)  {
    plusbtn.addEventListener("click",function(){
        plusbtn.nextElementSibling.innerHTML++
        total()
    })
}
//Minus Function
for(let minusbtn of minusBTNS)  {
    minusbtn.addEventListener("click",function(){
        if(minusbtn.previousElementSibling.innerHTML>0){
            minusbtn.previousElementSibling.innerHTML--
        }
        total()
    })
}
//Remove Product
for(let i in DLTS){
    DLTS[i].addEventListener("click",function(){
        cards[i].remove()
        total()
    })
}
//total function
function total(){
    let qte = Array.from(document.querySelectorAll(".counter"))
    let Price = Array.from(document.querySelectorAll(".price"))
    s=0
    for(let i=0; i<qte.length;i++){
        s= s +qte[i].innerHTML * Price[i].innerHTML
    }
    document.getElementById("totals").innerHTML=s;
}
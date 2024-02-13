const btnAdd = document.querySelectorAll(
  ".row .btn .operations button:nth-child(1)"
);
function incrementCounter() {
  for (let i = 0; i < btnAdd.length; i++) {
    let count = 0;
    btnAdd[i].onclick = function () {
      count++;
      btnAdd[i].querySelector(".count").textContent = count;
    };
  }
}
incrementCounter();
const btnReset = document.querySelectorAll(
  ".row .btn .operations button:nth-child(2)"
);
for (let i = 0; i < btnReset.length; i++) {
  btnReset[i].onclick = function () {
    btnReset[i].closest("div").querySelector(".count").textContent = 0;
    incrementCounter();
  };
}

//using e.target

/*const allCode = document.querySelectorAll(".row .btn .operations button:nth-child(1)");
//console.log(allCode);
for(let i=0;i<allCode.length;i++){
    let count = 0;
    //expression function
    allCode[i].onclick = function(e){
        //console.log(e.target);
        count++;
        e.target.querySelector(".count").textContent = count;
    }
    //arrow function
    // allCode[i].onclick = (e)=>{
    //     console.log(e.target);
    //     count++;
    //     e.target.querySelector(".count").textContent = count;
    // }
}*/

//using this

/*const allCode = document.querySelectorAll(".row .btn .operations button:nth-child(1)");
//console.log(allCode);
for(let i=0;i<allCode.length;i++){
    let count = 0;
    //expression function
    allCode[i].onclick = function(e){
        console.log(this);
        count++;
        this.querySelector(".count").textContent = count;
    }
    //arrow function (not run this is refrense to window global object)
    // allCode[i].onclick = (e)=>{
    //     console.log(this);
    //     count++;
    //     this.querySelector(".count").textContent = count;
    // }
    
}*/

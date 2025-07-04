//elements:
const gameWrapper = document.querySelector("#game-wrapper")
const gameWrapperWidth = gameWrapper.offsetWidth //hint det er 375 som bestemt i css

const messageOnPage = document.querySelector("#message");
const flamingo = document.querySelector("#flamingo");
const morfi = document.querySelector("#morfi-target");


//Start set-op
    messageOnPage.innerText= "START GAME"
    flamingo.style.left = gameWrapperWidth / 2 -75 + "px";


//game started
document.addEventListener("touchmove", ()=> {
    messageOnPage.innerText = "yay u go girl"
    const touch = event.touches[0];
    let x = touch.clientX;

    //update hvis ikke flamingo er ude for game-område
        //de 110 er for at selve flamingo ikke syntes at komme ud af skærmen
    if (x>0 && x<gameWrapperWidth-110) {
        flamingo.style.left = x+"px";
        flamingo.style.top = 500+"px";
    }
})





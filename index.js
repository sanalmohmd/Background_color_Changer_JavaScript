const color = ["#00080", "#00008B","#0000CD","#0000FF","#006400","#008000","#008080","#008B8B","#00FFFF","#7CFC00","#A2A2A"];

const btn = document.getElementById("btn");

const colors =document.querySelector(".color");

btn.addEventListener("click", () => {

    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = color [randomNumber];

    color.textContent = color[randomNumber];

});


function getRandomNumber(){
    return Math.floor(Math.random() * color.length);
}
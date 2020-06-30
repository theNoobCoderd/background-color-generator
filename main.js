var gradientTwo = document.querySelector("#gradient-two");
var gradientOne = document.querySelector("#gradient-one");


gradientOne.addEventListener("input", changeGradient);
gradientTwo.addEventListener("input", changeGradient);

function changeGradient() {
    document.body.style.background= "linear-gradient(to right, " + gradientOne.value + " , "+ gradientTwo.value+")";
}
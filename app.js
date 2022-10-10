let message = document.querySelector(".text-box");
let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", function () {
    if (message.value == "") {
        alert("Please fill the form!")
    }
    else {
        para.textContent = message.value;
        message.value = "";
    }
})


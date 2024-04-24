
document.addEventListener("DOMContentLoaded", function () {
  btn = document.querySelectorAll(".btn");
  textBox = document.querySelector("#textBox");

  btn.forEach((button) => {
    button.addEventListener("click", function(e) {
        GetValue(button);
    });
  });

});

function Space(){
    textBox.value += ' ';
}

function Backspace(){
    textBox.value = textBox.value.slice(0, -1)
}

function GetValue(button){
    const data = {"Space" :  Space, 'backspace' : Backspace}
    // console.log(button.textContent in data);
    if (button.textContent in data){
        data[button.textContent]();
    }
    else{
        textBox.value += button.textContent;
    }
}

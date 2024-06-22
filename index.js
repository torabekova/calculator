const buttonsEl = document.querySelectorAll("button");
const inputEl = document.getElementById("result");  

for ( let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonPressed = buttonsEl[i].textContent;
        if(buttonPressed === "C") {
            resultDelete();
        }else if( buttonPressed === "="){
            result();
        }else{
            score(buttonPressed);
        }
    });
}

    function resultDelete() {
        inputEl.value = "";
    }

    function result(){
        inputEl.value = eval(inputEl.value)
    }

    function score(buttonPressed){
        inputEl.value += buttonPressed
    }

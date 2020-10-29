let buttons = document.getElementsByClassName("btn");
let changeMe = document.getElementById("changeMe");
//run through a loop, add an eventlistener

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        alert("You clicked on " + e.target.innerText);
        changingText(e.target.innerText);

        // if(e.target.innerText == "Danger"){
        //     changeMe.innerText = "Danger";
        // }
    });
}

function changingText(textToChange) {
    //Only work if you want all buttons to do similar tasks
    changeMe.innerText = textToChange;

    //reset our css here
    //This is a must in order to have a clean css 
    changeMe.classList= " ";

    switch (textToChange) {
        //Text name of button will detect it what to be (primary == blue)
        case "Primary":
            changeMe.classList.add("blue");
            break;
        case "Secondary":
            changeMe.classList.add("grey");
            break;
        case "Success":
            changeMe.classList.add("green");
            break;
        case "Danger":
            changeMe.classList.add("red");
            break;
        case "Warning":
            changeMe.classList.add("yellow");
            break;
        case "Dark":
            changeMe.classList.add("dark");
            break;

    }


}


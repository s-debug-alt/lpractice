

        window.alert("Good morning");
// declare a variable to hold div
        let container = document.getElementById("container");
        container.innerHTML = "<p> This is inside div</p>";
        container.style.color = "red";
    let button = document.getElementById("btnClickMe");

    button.onclick = function(){
        window.alert('thanks');
    }

    let header = document.getElementsByTagName("h1")[0]; //get 1st h1 element
    header.onmouseover = function(){
header.style.color = 'blue';}

header.onmouseout = function(){
    header.style.color = 'black';}

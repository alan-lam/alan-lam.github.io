function beginning() {
    var x = document.getElementById("more_beginning");
    var b = document.getElementById("more_beginning_button");
    if (x.style.display === "none" || x.style.display == "") {
        x.style.display = "block";
        b.style.display = "none";
    }
    else {
        x.style.display = "none";
        b.style.display = "inline";
    }
}

function functions() {
    var x = document.getElementById("more_function");
    var b = document.getElementById("more_function_button");
    if (x.style.display === "none" || x.style.display == "") {
        x.style.display = "block";
        b.style.display = "none";
    }
    else {
        x.style.display = "none";
        b.style.display = "inline";
    }
}
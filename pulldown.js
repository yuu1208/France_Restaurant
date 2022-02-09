window.onload = function() {
    document.getElementById('mobile_menu').onclick = function() {
        if(document.getElementById('mobile').style.display == "none") {
            document.getElementById('mobile').style.display = "block";
            document.getElementById('nav').style.height = "340px";
        }
        else {
            document.getElementById('mobile').style.display = "none";
            document.getElementById('nav').style.height = "50px";
        }
    };
};
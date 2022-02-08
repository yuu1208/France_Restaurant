window.addEventListener('DOMContentLoaded', function(){
    var h = document.getElementById('nav');
    window.addEventListener('scroll', function(){
        if(window.scrollY >= innerHeight-98) {
            if(window.innerWidth >= 1170) {
                h.style.bottom = "inherit";
                h.style.position = "fixed";
            }
            else {
                return;
            } 
        }
        
        else {
            if(window.innerWidth <= 1170) {
                h.style.bottom = "0";
                h.style.position = "fixed";
            }
            else {
                h.style.bottom = "0";
                h.style.position = "absolute";
            }
        }
    });
});
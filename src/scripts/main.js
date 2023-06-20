$(document).ready(function(){
    AOS.init({
        duration: 3000,
        once: true,
    });

    $('#info').ready(function(){
        AOS.init({
            duration: 2500,
            once: false,
        });
    })
})
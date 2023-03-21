import $ from 'jquery';


$(document).ready(function () {
    $('.productButton').click(function () {
        $('#korg-container').effect("bounce", { distance: 10, times: 2 }, "fast")
    });

    $(".menuButton").click(function () {
        var ID = $(this).attr("id");
        var menuID = "#" + $(this).attr("id").concat("Menu");
        var dotID = "#" + this.id.concat("Dot");
        $(menuID).toggleClass("active");
        $(dotID).toggleClass("inactive");
    });
    
});


function increaseBasketNumber() {
    var basketCounter = document.getElementById('basketCounter');
    var numberOfItems = basketCounter.innerHTML;

    ++numberOfItems;
    document.getElementById('basketCounter').innerHTML = numberOfItems;


}


var timeout
var v = 0;
var product = document.getElementsByClassName("sweater")


function slideImages(i) {
    timeout = setInterval(changeImage, 1500, product, i);
}


function changeImage(product, i) {
    v ^= 1;

    if (v) {
        product[i].src = "redsweat2.jpg";
    }
    else {
        product[i].src = "sweater.png";
    }
}




function stopSlide(i) {
    clearTimeout(timeout);
    product[i].src = "sweater.png";
    v = 0;
}



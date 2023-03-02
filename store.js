$(document).ready(function(){
    $('button').click(function () {
        $('#korg-container').effect("bounce", {distance:10, times:2}, "fast")
      });
 });


function increaseBasketNumber() {
    var basketCounter = document.getElementById('basketCounter');
    var numberOfItems = basketCounter.innerHTML;

    ++numberOfItems;
    document.getElementById('basketCounter').innerHTML = numberOfItems;

    
}






/*Function to include Top navigation to a page*/
$(function(){
    $("#includeTopNav").load("/topNav.html"); 
});

/*Function to include Footer Bar to a page*/
$(function(){
    $("#includeFooter").load("/footer.html"); 
});

$(document).ready(function() {
    $('.image-popup').magnificPopup({type:'image'});
});
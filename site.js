$(document).ready(function(){
    
    $('[data-toggle="tooltip"]').tooltip(); 
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  
  
});
    
    // portfolio filter
    filterSelection("all");

    
    
   
$(".btn-group > .btn").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
}); 
    
});
function filterSelection(cat)
    {
     
        var x,i;
        x=document.getElementsByClassName("p-item");
        if (cat=="all")cat="";
        for(i=0;i<x.length;i++)
            {
                removeClass(x[i],"show");
                if (x[i].className.indexOf(cat)> -1)
                    addClass(x[i],"show");
            }
    }
function removeClass(elem, name){
    
    if(elem.className.indexOf(name)> -1)
        elem.classList.remove(name);
    console.log(elem.classList+" removed");
}
function addClass(elem, name){
    
    if(!elem.className.indexOf(name)>-1)
        elem.classList.add(name);
    
    console.log(elem.classList+" added");
}
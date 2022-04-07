(window).scroll(function(event){

    var yOffset = window.pageYOffset;
    var breakpoint = 50;
    if (yOffset > breakpoint){
      ("options").addClass('active');
    }else{
      ("options").removeClass('active');
    }
  
  });
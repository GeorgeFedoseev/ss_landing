$(document).ready(function() {
 
  var owl = $("#testimonials_crs");
  owl.owlCarousel({
      items : 1,
      itemsMobile : false,
      itemsDesktopSmall : false,      
      itemsTablet: false,
      singleItem:true
  });

  $("#testimonials_next").click(function(){
  	
    owl.trigger('owl.next');
  });

  $("#testimonials_prev").click(function(){  	
    owl.trigger('owl.prev');
  });
 
});
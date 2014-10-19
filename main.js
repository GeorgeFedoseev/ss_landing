$(document).ready(function() {
 
  var owl = $("#testimonials_crs");
  owl.owlCarousel({
      items : 1
  });

  $("#testimonials_next").click(function(){  	
    owl.trigger('owl.next');
  });

  $("#testimonials_prev").click(function(){  	
    owl.trigger('owl.prev');
  });
 
});
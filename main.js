$(document).ready(function() {
 
  var owl = $("#testimonials_crs");
  owl.owlCarousel({
      items : 1,
      itemsMobile : false,
      itemsDesktopSmall : false,      
      itemsTablet: false,
      singleItem:true,
      slideSpeed : 500,
  });

  $("#testimonials_next").click(function(){
  	
    owl.trigger('owl.next');
  });

  $("#testimonials_prev").click(function(){  	
    owl.trigger('owl.prev');
  });

  $("input[type='submit']").click(function(eventObject){
    var input = $(this).parent().find("input[type='email']");
    var email = input.val();
      if(email.length){
        if(validateEmail(email)){

        // send to server
        var oldBg = input.css('background');
        for(i=0;i<300;i++) {
          input.parent().fadeTo('slow', 0.8).fadeTo('slow', 1.0);
        }

        input.prop('disabled', true);

        // send req
        setTimeout(function(){
          input.css({
            'background': oldBg
          });
          input.prop('disabled', false);

          $(".suform").hide();
          $(".suform_after").show();
        }, 2000);

      }else{
        // wrong email
          $(input).parent().effect( "shake", {distance: 5} );
      }  
    }    
  });
 
});

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
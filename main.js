var banner_offset = 0;

$(document).ready(function() {
 
    // android banner
    if (document.cookie.indexOf("email_in_base") == -1) {
        showAnnouncementBanner();
    }
    
  // carousel

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



  // email

  $("input[type='submit']").click(function(eventObject){
    var input = $(this).parent().find("input[type='email']");
    onEmailSubmit(input);
  });

  $("input[type='email']").keypress(function(e) {
    if(e.which == 13) {
      var input = $(this);
      onEmailSubmit(input);    
    } 
  });  

  // idea video
  $("#idea_video_button").click(function(){
    $("#idea_video_youtube").html('<iframe width="433" height="244" src="http://www.youtube.com/embed/P-p00OesKpI?rel=0&showinfo=0&autoplay=1&autohide=1&hd=1&modestbranding=1&theme=light&color=white" frameborder="0" allowfullscreen></iframe>');
    $("#idea_video_button").hide();
  });

  // getmore video
  $("#getmore_video_play").click(function(){
    $("#getmore_video_youtube").html('<iframe width="533" height="300" src="http://www.youtube.com/embed/a5YKRo_vjjM?rel=0&showinfo=0&autoplay=1&autohide=1&hd=1&modestbranding=1&theme=light&color=white" frameborder="0" allowfullscreen></iframe>');
    $("#getmore_video_play").hide();
  });
 
});


function showAnnouncementBanner(){
    banner_offset = 80;
    $("#android-announcement").show();
    $("#topbar").css("margin-top", "80px");
}

function hideAnnouncementBanner(){
    banner_offset = 0;
    $("#android-announcement").hide();
    $("#topbar").css("margin-top", "0px");
}

function onEmailSubmit (input){
  var email = input.val();
      if(email.length){
        if(validateEmail(email)){

        // send to server
        var oldBg = input.css('background');
        input.animate({
          backgroundColor: 'rgb(250, 255, 189)'
        }, 1000);

        //input.prop('disabled', true);

        // send req
        $.post("http://smartsleepteam.com/email_submit.php", { email: email}, function( data ) {
        //setTimeout(function(){
            //data = "ok";
            console.log(data);
            if(data.indexOf("ok") != -1){
                input.css({
                  'background': oldBg
                });
                //input.prop('disabled', false);

                $(".suform").hide();
                $(".suform_after").show();
                hideKeyboard();                
                setEmailCookie();
                setTimeout(hideAnnouncementBanner, 3000);
            }else{
              input.animate({
                backgroundColor: oldBg
              }, 1000);
              $(input).parent().effect( "shake", {distance: 5} );
            }
        }/*, 1000*/);
        

      }else{
        // wrong email
          $(input).parent().effect( "shake", {distance: 5} );
      }  
    }
}

function setEmailCookie(){
    document.cookie = "email_in_base=true; max-age=" + 60 * 60 * 24 * 10;
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

var hideKeyboard = function() {
    document.activeElement.blur();
    $("input").blur();
};


// smooth scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-banner_offset
        }, 1000);
        return false;
      }
    }
  });
});


// scroll to top


$(function(){
    
    
    
 
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 700) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
 
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: 0}, 500, 'linear');
}




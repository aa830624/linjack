/*hide nav*/
  $(document).ready(function()
		  {       
				var scroll_start = 0;
				var startchange = $('#nav');
	            var offset = startchange.offset();
                var wy=0;
                var my=0;
                var ay=0;
            $(document).mousemove(function(event) {
                wy=$(document).scrollTop();
                my=event.pageY;
                ay=my-wy;
                
                if(ay<=100)
                    $('#nav').show();
                else if(ay>100&&(wy>=offset.top+50))
                    $('#nav').hide();    
            });

			  $(document).scroll(function() 
	      { 
	        scroll_start = $(this).scrollTop();
					if(scroll_start >= offset.top+50) { 
                            $('#nav').hide();
					} 
                  else
                        
	      	        {
				        $('#nav').show();
					}
			  });
	    });



/*smooth scroll*/
$(document).ready(function() {
  // smooth scroll modified by me@nandaabiz.com
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({ scrollTop: (target.offset().top-$('#nav').height()) }, 1000);
        return false;
      }
    }
  });
});

/*skill bar*/

$(document).scroll(function() { 
    var wy=0;
    wy=$(document).scrollTop();
    if(wy>=1700){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},3000);
		});
    }
	});
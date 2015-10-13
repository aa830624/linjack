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
    $("a").click(function(){
      var scroll = $(this).attr("href");
      $("body").animate({scrollTop: $(scroll).offset().top}, 1700);
      return false;
    });
});

/*skill bar*/

$(document).scroll(function() { 
    var wy=0;
    wy=$(document).scrollTop();
    if(wy>=1650){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},3000);
		});
    }
	});

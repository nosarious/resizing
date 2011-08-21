//    
//  resize several classes 
//
//	resize a background image to fit
//  proportions of height/width
//



function updateOrientation(){ //actions to take when orientation is changed.

    // give the height of the viewport to the various divs used
    // exception code is for the different browsers used.
	// these checks will determine the best height/width settings
    
    var cwidth = $(window).width()
    var cheight= $(window).height()
    
    if (typeof(window.innerWidth)=='number'){
		var cwidth = window.innerWidth;
		var cheight= window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth ||       document.documentElement.clientHeight)){
		var cwidth = document.documentElement.clientWidth;
		var cheight= document.documentElement.clientHeight;
    }  else if (document.body && (document.body.clientWidth || document.body.clientHeight)){
		var cwidth=document.body.clientWidth;
		var cheight=document.body.clientHeight;
    }
    
    $(window).width(cwidth);
    $(window).height(cheight);
    
	// ensures the html code fits properly
    $("body").css('height',cheight);
    $("body").css('width',cwidth); 
    
	// a class that can be changed, 
	// changing every div with the class
    $(".fullPage").css('height',cheight);
    $(".fullPage").css('width',cwidth);  
    
	// a separate div used in development
    $(".content-wrapper").css('height',cheight);
    $(".content-wrapper").css('width',cwidth);

	// a spacer class based off of the height of screen
    $(".filler").css('height',cheight*0.25);
    
	// a smaller spacer based off of the height of screen
    $(".fillerSmall").css('height',cheight*0.1);
    
	// for centering a content div on all browsers
    var columnWidth = 300;
    var gutterSide = (cwidth-columnWidth)/2;
    $(".article-content").css('left', gutterSide);
   
	// for centering a backgorund image
	// is img portrait or landscape?
	// is space for it portrait or landscape?
    if (cwidth>cheight) { 
        var narrower = ((cwidth-cheight)/2);
        $(".backdrop>img").css({'left': 0,'width':cwidth+'px','height':cwidth+'px'});
        $(".backdrop>img").css({'top': -narrower+'px','left': 0});
        cheight=cwidth;
        }
        
     if (cheight>cwidth)    {
        var taller = ((cheight-cwidth)/2);
        $(".backdrop>img").css({'width':cheight+'px','height':cheight+'px','top': 0});        
        $(".backdrop>img").css({'left': -taller+'px','top': 0});
        cwidth=cheight;
    }
    
	
}


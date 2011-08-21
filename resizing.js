//    
//  resize the article scroll area
//

function resizeArticleScroll (){ 

    if (wrapperSize == true){ //only do this if touch device.
        var cheight = $("body").height();
        var cwidth = $("body").width();
        $('#issue-container').css({'top':0});
        $('#issue-container').css({'height':cheight+'px'});
        /*
        var scrollerWidth;
        var sliderWidth = cwidth*3;
         
          
        $('#slider-container').css({'width':sliderWidth+'px', 'height':cheight+'px'});      
        
        $('.sliderContent').css({'width':cwidth+'px','height':cheight+'px','left':cwidth+'px'});
        */
    }
}

function resizeIcon (){ //resize small icon to fit screen

    if ($('#overlayed:has(img)')) {
        
        var cwidth = $("body").width();
        var cheight= $("body").height();
        
        var iheight = $(".largestIcon").outerHeight();
        var iwidth = $(".largestIcon").outerWidth();
        
        if (iwidth>iheight) { // set values for portrait
            portrait = false;
            } else { // set values for square or landscape
            portrait = true;
            }                
        ccwidth = cwidth*.75;
        ccheight=cheight*.75;        
        
        if (cwidth>cheight) { //screen wider
            var narrower = ((cwidth-cheight)/2);
            if (portrait) { // if landscape or square & screen wider
            $(".largestIcon").css({'width':'auto','height':ccheight+'px'});
            } else { //if portrait & screen wider
            $(".largestIcon").css({'width':ccheight+'px','height':'auto'});
            }
        } else { // screen taller
            var taller = ((cheight-cwidth)/2);
            if (portrait) { // if portrait & screen taller 
            $(".largestIcon").css({'width':'auto','height':ccwidth+'px'});
            } else { //if landscape or square & screen wider
            $(".largestIcon").css({'width':ccwidth+'px','height':'auto'});
            }
        }  
        
       
        var iheight = $(".largestIcon").outerHeight();
        var iwidth = $(".largestIcon").outerWidth();
        
        var gutterSide=(cwidth-iwidth)/2;
        var gutterTop=(cheight-iheight)/2;
        $(".largestIcon").css({'left': gutterSide+'px','top': gutterTop+'px'}); 
    }
    
}  

function recenterOverlay (){

    window.scrollTo(0,-2);
    var cwidth = $("body").width();
    var cheight= $("body").height();
    var iheight = $(".largestIcon").outerHeight();
    var iwidth = $(".largestIcon").outerWidth();
    var gutterSide=(cwidth-iwidth)/2;
    var gutterTop=(cheight-iheight)/2;
    $(".largestIcon").css({'left': gutterSide+'px','top': gutterTop+'px'}); 
    }

function updateOrientation(){ //actions to take when orientation is changed.

    // give the height of the viewport to the various divs used
    // exception code is for the different browsers used.
    
    var cwidth = $(window).width()
    var cheight= $(window).height()
    
    //window.alert($(window).width()+' '+$(window).height());
    
    ;
    if (typeof(window.innerWidth)=='number'){
    var cwidth = window.innerWidth;
    var cheight= window.innerHeight;
    
    //window.alert(cwidth+' '+cheight);
    
    
    } 
    else if (document.documentElement && (document.documentElement.clientWidth ||       document.documentElement.clientHeight)){
    var cwidth = document.documentElement.clientWidth;
    var cheight= document.documentElement.clientHeight;
    
    //window.alert('document.element '+cheight);
    }  else if (document.body && (document.body.clientWidth || document.body.clientHeight)){
    var cwidth=document.body.clientWidth;
    var cheight=document.body.clientHeight;
    
    //window.alert('document.body '+cheight);
    }
    
    /*
    window.alert(window.innerWidth+' '+window.innerHeight);
    window.alert(document.documentElement.clientWidth+' '+document.documentElement.clientHeight);
    window.alert(document.body.clientWidth+' '+document.body.clientHeight);
    */
    //alert('tested');
    $(window).width(cwidth);
    $(window).height(cheight);
    
    $("body").css('height',cheight);
    $("body").css('width',cwidth); 
    
    $(".fullPage").css('height',cheight);
    $(".fullPage").css('width',cwidth);  
    
    //$(".articleWrapper").css('height',cheight);
    $(".content-wrapper").css('height',cheight);
    $(".content-wrapper").css('width',cwidth);

    $(".filler").css('height',cheight*0.25);
    
    $(".fillerSmall").css('height',cheight*0.1);
    
    var columnWidth = 300;
    var gutterSide = (cwidth-columnWidth)/2;
    $(".article-content").css('left', gutterSide);
    //alert(gutterSide);
   
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
    
    resizeArticleScroll();
    recenterOverlay();
    if (FullScrollDone==true){
        setTimeout(function () { fullScroll.refresh() }, 0);
        fullScroll.scrollToElement('.active',100);
        }
	
}


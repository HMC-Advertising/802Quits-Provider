(function($){
    var hit = $(".hit");
    var mouse;
    hit.click(function(){
        var name = $(this).attr("data-name");
          $(".hit").removeClass("on").addClass("off");
           $(".body").removeClass("on").addClass("off").fadeOut("slow");
        if($(this).hasClass("off")){
             $("#"+name).fadeIn( "slow").removeClass("off").addClass("on");
             $(this).removeClass("off").addClass("on");
        }

    });
    $(".close").click(function(e){
        e.preventDefault();
        $(".hit").removeClass("on").addClass("off");
        $(".body").removeClass("on").addClass("off").fadeOut("slow");
    });

   



}(jQuery));

//there div id with corrolating info
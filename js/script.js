$(document).ready(function(){
  $("#prom1").click(function(){
    $("#panel1").slideToggle("slow");
    $("#subpanel1").css("background-color","#e5eecc").css("border", "solid 1px #c3c3c3");
  });

  $("#prom2").click(function(){
    $("#panel2").slideToggle("slow");
    $("#subpanel2").css("background-color","#e5eecc").css("border", "solid 1px #c3c3c3");
  });

  $("#prom3").click(function(){
    $("#panel3").slideToggle("slow");
      $("#subpanel3").css("background-color","#e5eecc").css("border", "solid 1px #c3c3c3");
  });


});

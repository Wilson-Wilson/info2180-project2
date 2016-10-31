$(document).ready(main);

function main(){
  var a = 0;
 	var b = 0;
  var c = 0;
 	var d = 0;
  var e;
 	$("#puzzlearea>div").each(function(){
    $(this).addClass("puzzlepiece");
 		e = $("#puzzlearea>div:first-child").position();
    c = e.left+(98*a);
    d = e.top+(98*b);
    $(this).css({ "top": d, "left": c});
 		if(a<3){
 			a++;
 		}else{
 			a=0;
 			b++;
 		}

 		$(this).css({"background-position-x": 0-c, "background-position-y": +0-d});

 	});
 }

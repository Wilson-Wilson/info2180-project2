$(document).ready(main);

var blank = [3,3];
var spaces = [];
var cornerstone;

function main(){
	var a = b = x = y = 0;
	$("#puzzlearea>div").each(function(){
		$(this).addClass("puzzlepiece");
		cornerstone = $("#puzzlearea>div:first-child").position();
		x = cornerstone.left+(98*a);
		y = cornerstone.top+(98*b);
		$(this).css({"top": y, "left": x});
		if(a<3){
			a++;
		}else{
			a=0;
			b++;
		}
		$(this).css({"background-position-x":0-x, "background-position-y":+0-y});
	});
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			spaces.push([i,j]);
		}
	}
	$("#shufflebutton").on("click",shuffle);
	setMovable();
}

function swap(){
	var a=[];
	$(".movablepiece").each(function(){
		a.push($(this));
	});
	var i = Math.floor(Math.random()*a.length);
	var position = blank;
	blank = getSpace(a[i]);
	if(a[i].hasClass("movablepiece")){
		var x = cornerstone.left+(98*position[0]);
		var y = cornerstone.top+(98*position[1]);
		a[i].animate({top: y, left: x});
		a[i].css({"top": y, "left": x});
		setMovable();
	}
}

function shuffle(){
	var x = Math.floor(Math.random()*128);
	for(var i=16;i<x;i++){
		swap();
	}
}

function setMovable(){
	$(".puzzlepiece").each(function(){
		$(this).off();
		if($(this).hasClass("movablepiece")){
			$(this).removeClass("movablepiece");
		}
		if(isAdj(getSpace($(this)),blank)){
			$(this).addClass("movablepiece");
			$(this).on("click",move);
		}
	})
}

function getSpace(a){
	var b = a.position();
	var c = Math.ceil((b.left-cornerstone.left)/98);
	var d = Math.ceil((b.top-cornerstone.top)/98);
	return [c,d];
}

function isAdj(a,b){
	if(a[0]===b[0]){
		return a[1]+1===b[1] || a[1]-1===b[1];
	}else if(a[1]===b[1]){
		return a[0]+1===b[0] || a[0]-1===b[0];
	}else{
		return false;
	}
}

function move(){
	var position = blank;
	blank = getSpace($(this));
	if($(this).hasClass("movablepiece")){
		var x = cornerstone.left+(98*position[0]);
		var y = cornerstone.top+(98*position[1]);
		$(this).animate({top: y, left: x});
		$(this).css({"top": y, "left": x});
		setMovable();
	}
}

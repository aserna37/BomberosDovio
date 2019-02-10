$(document).ready(function(){


$("#banner").css({"height":$(window).height() + "px"});

	$("ul a").hover(function(){
		$(this).css("color", "red");
		}, function(){
		$(this).css("color", "black");
	  });

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 70){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});
				$("header").css({"background-color": "#3C3C3C"});
				$("ul a").css({"color":"white"});
				$("ul a").hover(function(){
					$(this).css("color", "red");
					}, function(){
					$(this).css("color", "white");
				  });

				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "300px", "width": "250px","height":"250px"});
				$("header").css({"background-color": "transparent"});
				$("ul a").css({"color":"black"});
				$("ul a").hover(function(){
					$(this).css("color", "red");
					}, function(){
					$(this).css("color", "black");
				  });
				flag = false;
			}
		}

	});


});

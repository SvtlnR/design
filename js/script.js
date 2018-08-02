$(document).ready(function(){
	$(".hdr").fadeIn('slow', function(){});
	$("#shgi").click(function(){
		$("#about").hide('fast');
		$("#cont").hide('fast');
		$("#skills").hide('fast');
		$("#geninf").show('fast');
	});
	$("#shsk").click(function(){
		$("#geninf").hide('fast');
		$("#cont").hide('fast');
		$("#about").hide('fast');
		$("#skills").show('fast');
	});
	$("#shabout").click(function(){
		$("#geninf").hide('fast');
		$("#skills").hide('fast');
		$("#cont").hide('fast');
		$("#about").show('fast');	
	});
	$("#shcont").click(function(){
		$("#geninf").hide('fast');
		$("#about").hide('fast');
		$("#skills").hide('fast');
		$("#cont").show('fast');	
	});
	$("#sandwich").click(function(){
		$("nav ul").toggle('fast');
	});
	$(".imgskills").click(function(){
		$(".descrip").text('');
		var id='#'+$(this).attr('id').replace('pic_','');
		switch(id){
			case "#html": 
				$(id).text('I have studied HTML5 at university.');
				break;
			case "#css":
				$(id).text('I have studied CSS3 at university.');
				break;
			case "#js":
				$(id).text('I have studied JS at university.');
				break;
			case "#jquery":
				$(id).text('I have studied jQuery at university. As a rule I write scripts using jQuery. ');
				break;
			case "#php":
				$(id).text('I have recently started learning PHP.');
				break;

		}
	});
	$(".btn, .fileUpload").hover(function(){
		$(this).css('background-color','#c4a8aa');
	},function(){
		$(this).css('background-color','#5d374f');
	});		
	$(".up").hover(function(){
		$(".up").css('background-color','#e9e7ea');
	},function(){
		$(".up").css('background-color','#ceb9c0');
	});
	$('.up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    
  	});
	$("footer").text(String.fromCharCode(0169)+ (new Date()).getFullYear());
	if(window.matchMedia("(max-width: 768px)").matches){
	$(window).on("orientationchange",function(){
  		if(window.orientation != 0)
  		{
    		$("nav ul").css({'display':'inline-block'});
  		}
  		else{
  			$("nav ul").css({'display':'none'});	
  		}
	})
	}
	if(window.matchMedia("(min-width: 768px)").matches){
	$(window).on("orientationchange",function(){
  		if(window.orientation != 0)
  		{
    		$("nav ul").css({'display':'inline-block'});
  		}
  		else{
  			$("nav ul").css({'display':'inline-block'});	
  		}
	})
	}
});

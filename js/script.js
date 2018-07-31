$(document).ready(function(){
	$(".hdr").fadeIn('slow', function(){});
	$(".descrip").hide();
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
		$(".descrip").hide();
		var id='#'+$(this).attr('id').replace('pic_','');
		$(id).show('fast');
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

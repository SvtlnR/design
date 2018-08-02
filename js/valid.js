jQuery(function($){
	var readyMail=false;
	var readyFile=false;
	$(".fileloaded").css('display','none');
	$('#email').blur(function() {
		$("#resform").hide('fast');
		if($(this).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if(pattern.test($(this).val())){
						$(this).removeClass("errinp");
						$(this).addClass("correctinp");
						readyMail=true;
						$('#errmail').text('');
					} else {
						$(this).removeClass("correctinp");
						$(this).addClass("errinp");
						$('#errmail').text('Invalid e-mail');
						readyMail=false;
					}
		} else {
			$(this).removeClass("correctinp");
			$(this).addClass("errinp");
			$('#email').attr("placeholder","Input e-mail!");
		}
	});
	$("#addfile").change(function(){
		$("#resform").hide('fast');
		var pattern=/\.(pdf|jpe?g)$/i;
			if(pattern.test($(this).val())){
				$('#errfile').text('');
				$('#errfile').css('display','none');
				var filename = $(this).val().replace(/.*\\/, "");
				$(".fileloaded").css('display','block');
        		$(".fileloaded").text(filename);
				readyFile=true;
				
			}
			else{
				$(".fileloaded").css('display','none');
				$(".fileloaded").text('');
				$('#errfile').css('display','block');
				$("#errfile").text('File has to be .pdf,.jpeg or .jpg');
				readyFile=false;
			}
	});
	$("#inputoffer form").on('submit',function(e){

		e.preventDefault();



		if(readyMail&&readyFile)
         {
      
         	var em=$("#email").val();
         	var cm=$("#comment").val();
         	var fl=$("#addfile").val().replace(/C:\\fakepath\\/i, '');
            $.ajax({
                url: '',
                type: 'post',
                data: {'email':em,'comment':cm,'filename':fl},
                datatype:"json",
                success: function(){
                	$("#resform").show('fast');
                	$(".fileloaded").text('');
         			$(".fileloaded").hide('fast');
                	$("#email").val('');
         			$("#addfile").val('');
         			$("#comment").val('');
         			$("#email").removeClass("errinp");
         			$("#email").removeClass("correctinp");
                }
               
            });
        }
       else
       {

       }
	});

});
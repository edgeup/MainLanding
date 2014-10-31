$(document).ready(function() {

    $('.whitepaper_link').click(function() {
	    $('#form_success').fadeOut('fast');
		$('#whitepaper_form').slideDown("fast");
		$("#submitBtn").removeAttr("disabled", "disabled");
		return false;
	});
    
	$('#whitepaper_form').validate({
		errorClass: "error",
		validClass: "success",
		errorElement: "span",
		errorPlacement: function(error, element) {
			error.appendTo(element.prev());
		},
	    highlight: function(element, errorClass) {
	        $(element).closest('.text_group').removeClass('success').addClass('error');
	        
	        
	    },
	    success: function(element) {
	        $(element).closest('.text_group').removeClass('error').addClass('success');
	        
	    },
	    unhighlight: function(element, errorClass, validClass) {
		    $(element).closest('.text_group').removeClass('error').addClass('success');
	        
	        
	    },
	    rules: {
	        firstName: "required",
	        lastName: "required",
	        company: "required",
	        email: {
	            required: true,
	            email: true
	        }
	    },
	    
	    submitHandler: function(form) {
		    //waiting functions to prevent double submissions
			$('#whitepaper_form').animate({
				opacity: 0.7
			}, "100");
			$("#submitBtn").attr("disabled", "disabled");
			
	        // bind form using ajaxForm
	        var firstName = $("input[name='firstName']").val();
	        var lastName = $("input[name='lastName']").val();
	        var company = $("input[name='company']").val();
	        var email = $("input[name='email']").val();
	        var title = $("input[name='whitepaperTitle']").val();
	        
	        /*
	        
	        Parse.initialize("Fo8xSSL0cwr1dWGcMzSRC8XDh8AZSk8cnh3aiGWP", "DndvUeHpcR0jqg0ZcUzkbZ3kKwfMtUzwqqLHop98");
	        formSubmit = Parse.Object.extend("WhitepaperRequest");
	        newformSubmit = new formSubmit();
	        newformSubmit.set("First_Name", firstName);
	        newformSubmit.set("Last_Name", lastName);
	        newformSubmit.set("Email", email);
	        newformSubmit.set("Company", company);
	        newformSubmit.set("Source", title);
	        newformSubmit.save(null, {
	            success: function(newformSubmit) {
	            
	                $(form).ajaxSubmit({
				        url: '/mandrill/whitepaper.php',
				        resetForm: true,
				        clearForm: true,
			            success: function() { 
				            console.log(form);
			                $('#whitepaper_form').toggle('fast');
			                $('#whitepaper_form').animate({
								opacity: 1
							}, 'fast');
			                $('#form_success').fadeIn('fast');
			            },
			            error: function() {
			                alert('There was an problem with your request.');
			                $('#whitepaper_form').animate({
								opacity: 1
							}, "100");
							$("#submitBtn").removeAttr("disabled", "disabled");
			            } 
			        });
			        return false;
			        
	            },
	            error: function(newformSubmit, error) {
	                alert('There was an error while logging your submission.');
	                $('#whitepaper_form').animate({
						opacity: 1
					}, "100");
					$("#submitBtn").removeAttr("disabled", "disabled");
	            }
	            //return false;
	            */
	            
	            $(form).ajaxSubmit({
			        url: '/mandrill/whitepaper.php',
			        resetForm: true,
			        clearForm: true,
		            success: function() { 
			            //console.log(form);
		                $('#whitepaper_form').toggle('fast');
		                $('#whitepaper_form').animate({
							opacity: 1
						}, 'fast');
		                $('#form_success').fadeIn('fast');
		            },
		            error: function() {
		                alert('There was a problem with your request.');
		                $('#whitepaper_form').animate({
							opacity: 1
						}, "100");
						$("#submitBtn").removeAttr("disabled", "disabled");
		            } 
		        });
		        return false;
		        
	        //});
	    }
	});
    
});
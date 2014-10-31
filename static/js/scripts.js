var email;

$('#signup').click(function() {
    email = $('#email').val();

    $('body').append('<div id="ajax_holder"><div class="spinner"><img src="images/ajax_loader.gif" class="img-responsive" alt="waiting" title="waiting" /></div></div>');
    
    $.ajax({
        type: 'POST',
        url: '../../mandrill/signup.php',
        data: {
            'email': email
        },
        success: function() {
            parseSubmit(email);
        }
    });
});

function parseSubmit(emailAddress) {
    Parse.initialize('9hzjr9t2i3Ybb5oyt4NOjLEi9oxGfhlfhAtN4MMu', '3W7MJi1jhVUDfXws8XTmqiqkRLtcxSDdR5wyPlDu');
    var formSubmit = Parse.Object.extend('BetaSignup');
    var newFormSubmit = new formSubmit();
    newFormSubmit.set('email_address', emailAddress);
    newFormSubmit.save(null, {
        success: function() {
            alert('You have been successfully signed up. Thank you for your interest in Competitive Edge.');
            $('#email').val('');
            $('#ajax_holder').remove();
        },
        error: function() {
            $('#email').val('');
            $('#ajax_holder').remove();
            alert('There was a problem with your submission. Please try again.');
        }
    });
}
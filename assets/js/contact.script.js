$(document).ready((e)=>{
    e.preventDefault

    let is_firstname_valid = false
    let is_lastname_valid = false
    let is_email_valid = false
    let is_tele_valid = false
    let is_message_valid = false

    $("#confirm-detail").on('change', () =>{
        //checking the confirm checkbox is checked and no any errors in the input fields before enabling the submit button

        if ($("#confirm-detail").prop('checked') && is_firstname_valid && is_lastname_valid && is_email_valid && is_tele_valid && is_message_valid) { 
            $("#contact-submit").prop("disabled", false)
        } else {
            $("#contact-submit").prop("disabled", true)
        }
    })

    //Checking the first name and last name only contains letters

    $("#firstname").on('focusout', ()=>{
        let firstname = $("#firstname").val().trim()
        let nameRegex = /^[A-Za-z]+$/;

        if (!nameRegex.test(firstname)) {
            // If the input contains characters other than letters or white spaces, show an error message.
            
            $('#firstname').addClass('is-invalid').removeClass('is-valid')
            $("#firstname-feedback").text("Invalid name input").addClass('invalid-feedback').removeClass('valid-feedback')
            $("#confirm-detail").prop('checked', false)
            $("#contact-submit").prop("disabled", true)
            is_firstname_valid = false

        } else {
            $('#firstname').addClass('is-ivalid').removeClass('is-invalid')
            $("#firstname-feedback").text("").removeClass('is-invalid')
            $("#confirm-detail").prop('checked', false)
            is_firstname_valid = true
        }
    })

    $("#lastname").on('focusout', ()=>{
        let lastname = $("#lastname").val().trim()
        let nameRegex = /^[A-Za-z]+$/;

        if (!nameRegex.test(lastname) || lastname.length < 2) {
            // If the input contains characters other than letters or white spaces, show an error message.
            
            $('#lastname').addClass('is-invalid').removeClass('is-valid')
            $("#lastname-feedback").text("Invalid name input").addClass('invalid-feedback').removeClass('valid-feedback')
            $("#confirm-detail").prop('checked', false)
            $("#contact-submit").prop("disabled", true)
            is_lastname_valid = false

        } else {
            $('#lastname').addClass('is-ivalid').removeClass('is-invalid')
            $("#lastname-feedback").text("").removeClass('is-invalid')
            $("#confirm-detail").prop('checked', false)
            is_lastname_valid = true
        }
    })

    $("#email").on('focusout', ()=>{
        let email = $("#email").val().trim()
        let nameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameRegex.test(email)) {
            // If the input email is not into the correct format
            
            $('#email').addClass('is-invalid').removeClass('is-valid')
            $("#email-feedback").text("Invalid email address").addClass('invalid-feedback').removeClass('valid-feedback')
            $("#confirm-detail").prop('checked', false)
            $("#contact-submit").prop("disabled", true)
            is_email_valid = false

        } else {
            $('#email').addClass('is-ivalid').removeClass('is-invalid')
            $("#email-feedback").text("").removeClass('is-invalid')
            $("#confirm-detail").prop('checked', false)
            is_email_valid = true
        }
    })

    $("#tele").on('focusout', ()=>{
        let tele = $("#tele").val().trim()
        let nameRegex = /^\+94\d{9}$/;

        if (!nameRegex.test(tele)) {
            // If the input number is not into the Sri Lanka phone numbers format
            
            $('#tele').addClass('is-invalid').removeClass('is-valid')
            $("#tele-feedback").text("Invalid phone number").addClass('invalid-feedback').removeClass('valid-feedback')
            $("#confirm-detail").prop('checked', false)
            $("#contact-submit").prop("disabled", true)
            is_tele_valid = false

        } else {
            $('#tele').addClass('is-ivalid').removeClass('is-invalid')
            $("#tele-feedback").text("").removeClass('is-invalid')
            $("#confirm-detail").prop('checked', false)
            is_tele_valid = true
        }
    })

    $("#message").on('focusout', ()=>{
        let message = $("#message").val().trim()
        let nameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (message=='') {
            // If the message body is empty
            
            $('#message').addClass('is-invalid').removeClass('is-valid')
            $("#message-feedback").text("Message area cannot be empty").addClass('invalid-feedback').removeClass('valid-feedback')
            $("#confirm-detail").prop('checked', false)
            $("#contact-submit").prop("disabled", true)
            is_message_valid = false

        } else {
            $('#message').addClass('is-ivalid').removeClass('is-invalid')
            $("#message-feedback").text("").removeClass('is-invalid')
            $("#confirm-detail").prop('checked', false)
            is_message_valid = true
        }
    })

    $("#contact-submit").click(()=>{
        $(this).scrollTop("#contact-header")
        $("#submit-success").css({"display": "block", "transition": "all 0.5s"})
    })
    
})
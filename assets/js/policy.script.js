$(document).ready((e)=>{
    e.preventDefault

    $.get("/assets/pages/policy/privacy.policy/privacy.policy.txt", function(data) {
        let fileDom = $(data);

        $("#privacy-policy").html(fileDom)
        
    });

    $.get("/assets/pages/policy/terms/terms.conditions.txt", function(data) {
        let fileDom = $(data);

        $("#terms-policy").html(fileDom)
        
    });

    $.get("/assets/pages/policy/disclaimer/disclaimer.txt", function(data) {
        let fileDom = $(data);

        $("#disclaimer-policy").html(fileDom)
        
    });
    
})
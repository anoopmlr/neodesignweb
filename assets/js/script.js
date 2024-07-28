$(document).ready (()=> {

    // Mobile menu jquery function

    $(".hamburg").on("click", ()=>{
        if($(".hamburg i").hasClass("fa-bars")) {
            $(".menu-page").toggleClass("menu-active")
            $(".hamburg i").addClass("fa-xmark").removeClass("fa-bars")
        

        } else if ($(".hamburg i").hasClass("fa-xmark")) {
            $(".menu-page").toggleClass("menu-active")
            $(".hamburg i").addClass("fa-bars").removeClass("fa-xmark")

        }
    })

}) 
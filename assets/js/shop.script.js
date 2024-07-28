$(document).ready((e)=>{
    e.preventDefault
    console.log ("Init");
    const productArray = ["101", "102", "103", "104", "105", "106", "107", "108", "109"]

    let showProductArray = []
    let hideProductArray = []

    let storyProductArray = productArray
    let bedroomProductArray = productArray
    let bathroomProductArray = productArray

    let story = 0
    let bedroom = 0
    let bathroom = 0

    $("#story").change(()=>{
        storyProductArray =[]
        story = $("#story").val()

        if (story != '') {
            productArray.forEach(element => {
                domId = "#"+element
                if ($(domId + " .card-body h5").text()[0] == story) {
                    storyProductArray.push(element);
                }
            });
            console.log(storyProductArray)
        } else {
            storyProductArray = productArray
            console.log(storyProductArray)
        }

        showProducts()

    })

    $("#bedroom").change(()=>{
        bedroomProductArray = []
        bedroom = $("#bedroom").val()

        if (bedroom != '') {
            productArray.forEach(element => {
                
                domId = "#"+element
                // console.log($(domId + " .card-body .bedroom").text()[1])
                if ($(domId + " .card-body .bedroom").text()[1] == bedroom) {
                    
                    bedroomProductArray.push(element);
                }
            });
            // console.log("yes " + bedroomProductArray)
        } else {
            bedroomProductArray = productArray
            // console.log("no "+bedroomProductArray)
        }

        showProducts()

    })

    $("#bathroom").change(()=>{
        bathroomProductArray = []
        bathroom = $("#bathroom").val()

        if (bathroom != '') {
            productArray.forEach(element => {
                domId = "#"+element
                if ($(domId + " .card-body .bathroom").text()[1] == bathroom) {
                    bathroomProductArray.push(element);
                }
            });
        } else {
            bathroomProductArray = productArray
        }

        showProducts()

    })

    function showProducts(){

        showProductArray = []
        hideProductArray = []

        productArray.forEach(element => {
            if (storyProductArray.includes(element)) {
                if (bedroomProductArray.includes(element)) {
                    if (bathroomProductArray.includes(element)) {
                        showProductArray.push(element)
                    } else {
                        hideProductArray.push(element)
                    }
                } else {
                    hideProductArray.push(element)
                }
            } else {
                hideProductArray.push(element)
            }
        })

        showProductArray.forEach(element => {
            domId = '#'+element
            $(domId).addClass("show").removeClass("hide")
        })

        hideProductArray.forEach(element => {
            domId = '#'+element
            $(domId).addClass("hide").removeClass("show")
        })
    };

});
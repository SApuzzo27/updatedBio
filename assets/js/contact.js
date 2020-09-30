    var feedbackEl = document.querySelector(".feedback");
    
    
    // add click event to save button class to run function
    $(".submitBtn").on( "click", function () {
        $(feedbackEl).attr("class", "feedback");
        setTimeout(function() {
        $(feedbackEl).attr("class", "hide");
        }, 1000);
        feedbackEl.textContent = "Your Contact Information has been Submitted!";
    }); 
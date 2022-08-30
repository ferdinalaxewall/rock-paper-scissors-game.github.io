$(document).ready(function(){
    $("#rules-button").off('click').on('click', function(){
        let target = $(this).attr("data-target");
        let targetElement = $("body").find("#"+target);

        if ($(targetElement).attr("modal-show") == "off") {
            $(targetElement).attr("modal-show", "on");
        }

        setTimeout(() => {
            if ($(".modal").attr("modal-show") == "on") {
                $(document).keyup(function(e) {
                    if (e.key === "Escape") { 
                         $("#close-modal-button").click();
                   }
               });
            }
        }, 50);
    });

    $("#close-modal-button").click(function(){
        if ($(".modal").attr("modal-show") == "on") {
            $(".modal").attr("modal-show", "off");
        }

    });

    $(".modal-overlay").click(function(){
        $("#close-modal-button").click();
    });

    let asal = 0;

    $(".box-game-section").click(function(){
        asal++
        
        if (asal == 1) {
            let playerChoices = $(this).attr("box-name");
            let randomChoices = getRandomChoices();

            console.log("Player : " + playerChoices + "\nComputer : " + randomChoices);
        }
    });

    
});

function getRandomChoices(){
    const maxNumber = 2;
    const choices = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    let randomChoices = choices[randomNumber];
    
    return randomChoices;
}


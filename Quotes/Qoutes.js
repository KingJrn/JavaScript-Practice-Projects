/* -------------------------------------------------------------------------- */
/*                  Generate a random Quotes using fetch api                  */
/* -------------------------------------------------------------------------- */


fetch("https://type.fit/api/quotes")
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
        
        $(document).ready(function () {
            $("button").on("click", function () {
                // generate a random number 
                let randNum = Math.floor(Math.random() * data.length);
                
                if (data[randNum].author == null) {
                    var annAuthor = "Annonymous"
                    $(".content").html(data[randNum].text);
                    $(".title").html(annAuthor);
                } else {
                    $(".content").html(data[randNum].text);
                    $(".title").html(data[randNum].author);
                };

                // Change the color of the media container
                themeColors = Array("has-background-primary", "has-background-link", "has-background-danger");
                var randColor = Math.floor(Math.random() * themeColors.length); //Generate a random value from themeColors

                var divContainer = document.querySelector(".image");
                var classes = divContainer.classList;
        

                for (var item = 0; item < classes.length; item++) {
                    if (themeColors.includes(classes[item])) {
                        divContainer.classList.replace(classes[item], themeColors[randColor])
                    }
                }
            }) 
        })
    });



/* ----------- JavaScript: Fetch API for the Inspirational quotes ----------- */

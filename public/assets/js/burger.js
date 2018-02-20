$(function () {

    $(".create-form").on("submit", (event) => {
        console.log("is this working now?!")
        event.preventDefault();

        let addBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(() => {
            console.log("New Burger Added!");
            location.reload();
        })
    });

    
});
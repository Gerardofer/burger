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

    $(".dev").on("click", (event) => {
        let id = $(this).data("id");
        let newDevoured = $(this).data("devoured");

        let devouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then(() => {
            console.log("This is id: ", id);
            location.reload();    
        })
    });


});
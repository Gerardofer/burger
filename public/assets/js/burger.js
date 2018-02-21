$(function (){
    $(document).ready(function() {
        $(".devoured").on("click", (evt) => {
            // console.log('evt', evt);
        	let id = $(evt.currentTarget).data('burger-id');
        
        	// console.log("The id is: " + id);
        	// console.log("evt ", $(evt.currentTarget).data('burger-id'));
        // 	debugger;
        	let change = {
        		devoured: true
        	};
        	
        	$.ajax("/api/burgers/" + id, {
        		type: "PUT",
        		data: change
        	}).then(()=>{
        		console.log("Update being completed");
        		location.reload();
        	})
        })
    	
        $(".create-form").on("submit", (event) => {
            event.preventDefault();
            let name = $("#new-burger").val().trim();
            
            let newBurger = {
                burger_name: name,
                devoured: false
            };
            
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(() => {
                console.log("burger added");
                location.reload();
            });
        });
    });
})
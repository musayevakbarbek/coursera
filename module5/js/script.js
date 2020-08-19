//event listener
/*document.addEventListener("DOMContentLoaded", 
	function (event) {

		function sayHello(event) {
		console.log(event);
		this.textContent = "Said it";
		var name = document.getElementById("name").value;
		var message = " <h2> Hello, " + name + "! <h2>";
		document.getElementById("content").innerHTML = message;

		if(name === "student") {
			var title = document.querySelector("#title").textContent;
			title += " and others";
			document.querySelector("#title").textContent = title;
		}
	}

	document.querySelector("button").addEventListener("click", sayHello);
	document.querySelector("body").addEventListener("mousemove", 

		function (event) {
			if(event.shiftKey == true) {
			console.log("x: " + event.clientX);
			console.log( "y: " + event.clientY);
			}
		}
	);



	}
);*/

// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", function () {

        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.json", 
            function (res) {
              var name = res.name + ' ' + res.surname

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            }, );

        
      });
  }
);
function validate() {
	var loginBox = document.getElementById("loginBox");
	var thisusername = document.getElementById("username");
	var thispassword = document.getElementById("password");

	var httpRequest = new XMLHttpRequest();
	var params = 'username=' + username.value + '&password=' + password.value;

	httpRequest.open('POST', '/auth', true);
	httpRequest.setRequestHeader('Content-type', 'application/json');
	httpRequest.responseType = "json";

	httpRequest.onreadystatechange = function() {
			if(httpRequest.readyState == 4 && httpRequest.status == 200) {
				if(httpRequest.response.success){
					localStorage.setItem("loginToken", httpRequest.response.token);
					window.open("/user/", "_self");
				} else {
                    showToast();
                }
			}
	}
	httpRequest.send( 
		JSON.stringify({
			username: thisusername.value,
			password: thispassword.value
		})
	 );
}

function showToast() {
	var toast = document.getElementById("toast");

	toast.className = "show";

	setTimeout(function(){
		toast.className = ""
	}, 3000);
}
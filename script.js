function getProfile(){
    var username = 'szabogergely07';

    /* Create an AJAX request */
    var xhttp = new XMLHttpRequest();
    /* Defines a function to be called when the readyState property changes */
    xhttp.onreadystatechange = function(){

        if(xhttp.readyState == 4 && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('profile').innerHTML = user.name;
        }
    }

    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
    /*	Sends the request to the server */
    xhttp.send();
}

getProfile();
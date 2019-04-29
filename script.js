function getProfile(){
    var username = 'szabogergely07';

    /* Create an AJAX request */
    var xhttp = new XMLHttpRequest();
    /* Defines a function to be called when the readyState property changes */
    xhttp.onreadystatechange = function(){

        if(xhttp.readyState == 4 && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('userName').innerHTML = user.name;
            document.getElementById('avatar').innerHTML = `<img src="${user.avatar_url}" alt=""></img>`;
            document.getElementById('userBlog').innerHTML = "Website: " + `<a target="_blank" href="${user.blog}">Click here to wisit</a>`;
            document.getElementById('userEmail').innerHTML = "Email: " + user.email;
            document.getElementById('public_reps').innerHTML = `${user.public_repos} ` + `<a target="_blank" href="${user.repos_url}">Public Repositories</a>`;
            document.getElementById('location').innerHTML = "Location: " + user.location;
        }
    }

    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
    /*	Sends the request to the server */
    xhttp.send();
}

getProfile();
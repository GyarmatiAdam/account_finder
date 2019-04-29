function getProfile(e){

/*prevent from submitting a form*/
    e.preventDefault();

    var username = document.getElementById('username').value;
    if(!username || username == ''){
        username = 'GyarmatiAdam'
    }

/* Create an AJAX request */
    var xhttp = new XMLHttpRequest();
/* Defines a function to be called when the readyState property changes */
    xhttp.onreadystatechange = function(){

        if(xhttp.readyState == 4 && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('userName').innerHTML = user.name;
            document.getElementById('avatar').innerHTML = `<img src="${user.avatar_url}" alt=""></img>`;
            document.getElementById('userBlog').innerHTML = "Website: " + `<a target="_blank" href="${user.blog}">Click here to wisit</a>`;
            document.getElementById('bio').innerHTML = "About: <br>" + user.bio;
            document.getElementById('userEmail').innerHTML = "Email: " + user.email;
            document.getElementById('public_reps').innerHTML = "Number of repositories: " + user.public_repos;
            document.getElementById('location').innerHTML = "Location: " + user.location;
            document.getElementById('profil').innerHTML = `<a class="btn btn-danger" target="_blank" href="${user.html_url}">Profile</a>`;
            
/** if there is no such an info, than display those messages*/
            if(user.email == undefined){
                document.getElementById('userEmail').innerHTML = "Email: No email found";
            }
            if(user.blog == undefined){
                document.getElementById('userBlog').innerHTML = "Website not available"
            }
        
        }
    }

    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
/*	Sends the request to the server */
    xhttp.send();
}
/** submit the value from the input field */
document.getElementById('user_input').addEventListener('submit', getProfile, false);


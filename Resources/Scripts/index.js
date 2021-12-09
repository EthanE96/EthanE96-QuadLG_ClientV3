//Search Bar
function searchBar() {
    const value = document.getElementById("searchData").value
    window.location="plants.html";
    restoreFromHardCoded(value);
}


// Googe Sign In Script
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    var confirm = "ethanaedwards5@gmail.com"
    var userEmail = profile.getEmail()

    if (userEmail == confirm) {
        window.location="admin.html";

        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function (){
        console.log('User signed out.');
        });
    }
    else{
        alert("Passwords do not match.");
    }
}


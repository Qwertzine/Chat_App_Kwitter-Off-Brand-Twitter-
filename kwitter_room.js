
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAfQVkHFKayG4wE6qWSt36rduVDgYX3Rcs",
      authDomain: "kwitter-b7bb8.firebaseapp.com",
      databaseURL: "https://kwitter-b7bb8-default-rtdb.firebaseio.com",
      projectId: "kwitter-b7bb8",
      storageBucket: "kwitter-b7bb8.appspot.com",
      messagingSenderId: "358788790642",
      appId: "1:358788790642:web:58b64176601f722cbf85eb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


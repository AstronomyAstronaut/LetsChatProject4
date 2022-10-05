
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDrPckQFlTW43BM61Cg22whPt8E5sEb6wI",
      authDomain: "kwitter-e4065.firebaseapp.com",
      databaseURL: "https://kwitter-e4065-default-rtdb.firebaseio.com",
      projectId: "kwitter-e4065",
      storageBucket: "kwitter-e4065.appspot.com",
      messagingSenderId: "850580973351",
      appId: "1:850580973351:web:32113d19da2edb7ec46b02"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");

    document.getElementById("username").innerHTML = "Welcome " + username + " !";

    function addroom()
    {
        roomname = document.getElementById("roomname").value;
        firebase.database().ref("/").child(roomname).update({
              Name : "Abi"
        });
        localStorage.setItem("roomname", roomname);
        window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name)
{
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}

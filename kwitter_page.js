//YOUR FIREBASE LINKS
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
    roomname = localStorage.getItem("roomname");

     function send()
     {
          msg = document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name: username,
                message: msg,
                like: 0
          });
          document.getElementById("msg").value = "";
     }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
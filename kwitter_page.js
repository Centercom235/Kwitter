//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAdJ58fJrpcUHrjXlFWvz-fa0-3iMau4TE",
      authDomain: "kwitter-3ea70.firebaseapp.com",
      databaseURL: "https://kwitter-3ea70-default-rtdb.firebaseio.com",
      projectId: "kwitter-3ea70",
      storageBucket: "kwitter-3ea70.appspot.com",
      messagingSenderId: "447397654208",
      appId: "1:447397654208:web:90b3a4de2419d06dcc4725"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      messege:msg,
      like:0
});
document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

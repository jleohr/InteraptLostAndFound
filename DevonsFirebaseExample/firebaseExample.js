

// Initialize Firebase
let config = {
    apiKey: "AIzaSyC5l_RAlHiYxnli6_3KJI0MkDX3r9njyi0", //Your Api Key
    authDomain: "watchdog-1523671176586.firebaseapp.com", //Your Auth Domain
    databaseURL: "https://watchdog-1523671176586.firebaseio.com", //Database URL
    projectId: "watchdog-1523671176586", // Project ID
    storageBucket: "", //Leave empty
  };

//This is your local refrence to firebase
firebase.initializeApp(config);

//Refrence to the database
let database = firebase.database();

//Refrence the items branch of your databse
let itemsRef = firebase.database().ref("items");

function updateFirebase() {
   
};

//Create a function that will run when the Website is finished loading as well as create a function when the button is clicked. 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("save").addEventListener('click',function ()
    {
        console.log("it worked!")
        //Config the Model
        var lostItem = {
            description: document.getElementById("description").value, //Put the item description here
            qty: document.getElementById("qty").value, //Put the qty of items here 
            name: document.getElementById("name").value, //Name of the item here
            ownerLocation: document.getElementById("location").value, //Location of owner here
            ownerName: document.getElementById("ownerName").value, //Name of owner here
        };
    
        itemsRef.update(lostItem);
    }  ); 
});
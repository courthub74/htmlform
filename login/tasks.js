const firebaseConfig = {
  apiKey: "AIzaSyB08GMGvcbq9T_LN0mm39sPYdjFIkP-EWo",
  authDomain: "htmlformpraccy.firebaseapp.com",
  databaseURL: "https://htmlformpraccy-default-rtdb.firebaseio.com",
  projectId: "htmlformpraccy",
  storageBucket: "htmlformpraccy.appspot.com",
  messagingSenderId: "328259796993",
  appId: "1:328259796993:web:b327fe124c0c8fb7550000"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create a reference for your database
var firebaseRef = firebase.database().ref("tasks");


// TO DATABASE

// Event Listener to submit button
document.querySelector("#send").addEventListener('click', () => {
    // set a variable to get the value of the input field
    const task = document.getElementById('tasks').value;
    // push the value to the firebase reference point
    firebaseRef.push(task);
    // test print the input
    console.log(task);
});


// FROM DATABASE

// create a snapshot of the database
firebaseRef.on("value", function(snapshot) {
  var data = snapshot.val();
  for(let i in data){
    console.log(data[i]);
  }
  // function called element that iterates through each
  // snapshot.forEach(function(element) {
  //   // grab the innerHTML of the input id field
  //   // document.querySelector('#root').innerHTML +=`
  //   //   <div>${element.val()}</div>
  //   // `
  // })
  
})
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

// test print the database reference
console.log(firebaseRef);  

// utilize the on function 
// and pass the getData function as an argument
  // function to locate the firebase db 
    // then iterate through it to manipulate
// and pass the errData function as an argument
  // this function tests for errors 
    // i.e. permissions, other blocks
firebaseRef.on('value', getData, errData);

// create the getData function 
  // pass the argument 'data'
function getData(data) {
     // to clear the double listing
    //  var tasklisting = selectAll('.tasklisting');
    //  for (var i = 0; i < tasklisting.length; i++) {
    //    tasklisting[i].remove()
    //  }
  // test print the values of each node
  console.log(data.val());
  // set variable to get the value of each task (or node) 
  var tasks = data.val();
  // set variable to get the keys of each task
  var keys = Object.keys(tasks);
  // test print the keys
  console.log(keys);
  // iterate through all of the tasks
  for(let i in tasks){
    // test print the iteration
    console.log(tasks[i]);
    // create a new element
    // var li = createElement('li', tasks[i]);
    // li.parent('tasklister');
    // create the output in HTML
    document.querySelector("#tasker").innerHTML +=`
    <div>${tasks[i]}</div>
    `
  }
}

// create the errData function
function errData(err) {
  console.log(err);
}
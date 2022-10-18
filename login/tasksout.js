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

  database = firebase.database();

  // Reference the Database
  var ref = database.ref('tasks');
  console.log(ref);
  ref.on('value', gotData, errData);

  function gotData(data) {

    // to remove the tasks
    // FOR THE DELETE BUTTON
    // var taskslist = selectAll('#taskslist');
    // for (var i = 0; i < taskslist.length; i++) {
    //     taskslist[i].remove();
    // }
    console.log(data.val());
    // set variable to get the value of each task
    var tasks = data.val();
    // set variable to get the keys of each task
    var keys = Object.keys(tasks);
    // test print the keys
    // console.log(keys);
    // iterate through everything
    for(let i in tasks){
        console.log(tasks[i]);
        document.querySelector('#taskslist').innerHTML +=`
        <div>${tasks[i]}</div>
      `
    }
}
  

// to catch the error
  function errData(err) {
    console.log('Error!');
    console.log(err);
  }

// FROM DATABASE

// // create a snapshot of the database
// firebaseRef.on("value", function(snapshot) {
//     var data = snapshot.val();
//     for(let i in data){
//       console.log(data[i]);
//     }
//     // function called element that iterates through each
//     snapshot.forEach(function(element) {
//     // grab the innerHTML of the input id field
//       document.querySelector('#root').innerHTML +=`
//         <div>${element.val()}</div>
//       `
//     })
    
//   })
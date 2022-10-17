const firebaseConfig = {
    apiKey: "AIzaSyB08GMGvcbq9T_LN0mm39sPYdjFIkP-EWo",
    authDomain: "htmlformpraccy.firebaseapp.com",
    databaseURL: "https://htmlformpraccy-default-rtdb.firebaseio.com",
    projectId: "htmlformpraccy",
    storageBucket: "htmlformpraccy.appspot.com",
    messagingSenderId: "328259796993",
    appId: "1:328259796993:web:b327fe124c0c8fb7550000"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database (id of the form)
var todoFormDB = firebase.database().ref("todo");

// Event Listener to submit button
document.getElementById("todo").addEventListener("submit", submitForm);

// create the submit form function called above
function submitForm(e) {
    // keeps page from refreshing
    e.preventDefault();

    // get the value of the task entered
    var task = getElementVal("task");

    // test print in console the value added
    // console.log(task);


    // enable alert
    document.querySelector(".alert").style.display = "block";

    // remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // reset the form
    document.getElementById("todo").reset();

    // save to database
    saveMessages(task);
}

// NOW save the messages to the database
const saveMessages = (task) => {
    var newTodoForm = todoFormDB.push();

    newTodoForm.set({
        task: task,
    });
};

// getElement Value
const getElementVal = (id) => {
    return document.getElementById(id).value;
};

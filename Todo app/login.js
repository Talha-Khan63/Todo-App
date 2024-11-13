const firebaseConfig = {
    apiKey: "AIzaSyCYhi01s3fXZf9tUnIshRVICnGR-4hVYjA",
    authDomain: "todo-app-8a51c.firebaseapp.com",
    databaseURL: "https://todo-app-8a51c-default-rtdb.firebaseio.com",
    projectId: "todo-app-8a51c",
    storageBucket: "todo-app-8a51c.firebasestorage.app",
    messagingSenderId: "1062482130502",
    appId: "1:1062482130502:web:5c879905bb8f4bcdb03c47"
  };
  
  firebase.initializeApp(firebaseConfig); 
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
      
      // Redirect to index.html after alert disappears
      window.location.href = "index.html";
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }
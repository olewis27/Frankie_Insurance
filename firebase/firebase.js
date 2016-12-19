
(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9DyjKvYnf3aLlpol8VSDWk1bhTUf6A9c",
    authDomain: "national-insurance-agency.firebaseapp.com",
    databaseURL: "https://national-insurance-agency.firebaseio.com",
    storageBucket: "national-insurance-agency.appspot.com",
    messagingSenderId: "800620644219"
  };
  firebase.initializeApp(config);

  //Get Elements
  const txtUsername = document.getElementById('txtUsername');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');

  //Add login event
  btnLogin.addEventListener('click', e => {

    //Get Username & Password

    const Username = txtUsername.value;
    const Password = txtPassword.value;
    const auth = firebase.auth();

    //Sign In
    const promise = auth.signInWithUsernameAndPassword(username,pass);

    promise.catch(e => console.log(e.message));
  });

  //Add Signup event
  btnSignUp.addEventListener('click' e => {

    const Username = txtUsername.value;
    const Password = txtPassword.value;
    const auth = firebase.auth();

    //Create User
    const promise = auth.createUserWithUsernameAndPassword(username,pass);

    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e =>) {
    firebase.auth().signOut();
  };

  //Add a realtime Listener
  firebase.auth().OnAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classlist.remove('hide');
      } else {
        console.log('not logged in');
        btnLogout.classlist.add('hide');
      }
  });

}());

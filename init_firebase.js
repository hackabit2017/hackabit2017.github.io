var config = {
  apiKey: "AIzaSyBLWCCZ8Zljol3Q2oZJ9NL-nu08QxMR38Q",
  authDomain: "my-tutor-c787f.firebaseapp.com",
  databaseURL: "https://my-tutor-c787f.firebaseio.com",
  projectId: "my-tutor-c787f",
  storageBucket: "my-tutor-c787f.appspot.com",
  messagingSenderId: "973026526111"
};
firebase.initializeApp(config);

var photosRef = firebase.storage().ref('/photos');

function uploadImageFromString(str_value) {
  var timestamp = Math.round((new Date()).getTime() / 1000);
  var photoRef = photosRef.child('photo_'+timestamp+'.jpg');
  photoRef.putString(str_value, 'data_url').then(
    function(snapshot) {
      console.log('Uploaded a data_url string!');
    });
}
//database
var firebaseConfig = {
  apiKey: "AIzaSyApNi5rYeVsVkyzs_URaNRISwRu8TXdNZM",
  authDomain: "proteus-blog-7bf97.firebaseapp.com",
  databaseURL: "https://proteus-blog-7bf97.firebaseio.com",
  projectId: "proteus-blog-7bf97",
  storageBucket: "proteus-blog-7bf97.appspot.com",
  messagingSenderId: "195466704947",
  appId: "1:195466704947:web:95e707ea051c47f9a98b46",
  measurementId: "G-P8VG30RTYF"
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();

//fetches likes
function getLikesOnButton(bpid){
  var bp = database.ref('blogposts/blog'+bpid+'/likes_count');
  var templikes = 0;
  bp.on('value', snap => {
    templikes = snap.val();
    //console.log(snap.val());
    document.getElementById("blog"+bpid+"counter").innerText = templikes;
  });
  //for debugging purposes
  return templikes;
}

//if local storage doesnt have key
if (localStorage.getItem("likey")===null){
  //generate key
  //console.log("run");
  var acc = firebase.database().ref().child('Users').push().getKey();
  var updates={};
  updates[acc]="";
  firebase.database().ref('Users/').push(updates);
  localStorage.setItem("likey", acc);
}

//toggles liked/unliked
function updateLikes(bpid){
  var dbRef= firebase.database().ref("/blogposts/blog"+bpid+'/likes');
  checkLiked(bpid, function(boo){
    if(boo){
      firebase.database().ref("/blogposts/blog"+bpid+'/likes_count').transaction(function(value) {
        return (value || 0) - 1;
      });
      //console.log("removing");
      //set to unliked heart
      document.getElementById("b"+bpid+"heart").style.color = "#000000";
      firebase.database().ref("/blogposts/blog"+bpid+'/likes/'+localStorage["likey"]).remove();
    }
    else{
      firebase.database().ref("/blogposts/blog"+bpid+'/likes_count').transaction(function(value) {
        return (value || 0) + 1;
      });
      var updates = {};
      updates[localStorage["likey"]]="";
      //set to liked heart
      document.getElementById("b"+bpid+"heart").style.color = "#FF0000";
      firebase.database().ref("/blogposts/blog"+bpid+'/likes/').update(updates);
    }
  });
}

//callback function to return boolean (true=liked, false=not liked)
function checkLiked(bpid, callback){
  var boo;
  var bp = firebase.database().ref("/blogposts/blog"+bpid+"/likes/").child(localStorage["likey"]);
  bp.once("value", snap => {
    var obj = snap.val();
    if (obj === null){
      //console.log("not liked");

      boo = false;
      //set to unclicked heart
      document.getElementById("b"+bpid+"heart").style.color = "#000000";
      callback(boo);
    }
    else{
      //console.log("liked");
      document.getElementById("b"+bpid+"heart").style.color = "#FF0000";
      boo= true;
      //set to clicked heart
      callback(boo);
    }
  });
}

var arr = ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010", "0011", "0012"];
arr.forEach(function initPost(bpid){
    //console.log("init "+ bpid);
    getLikesOnButton(bpid);
    checkLiked(bpid, function(boo){});
    document.getElementById("b"+bpid+"button").addEventListener("click", function(){
      updateLikes(bpid);
    });
  }
);


//darkmode
const options = {
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

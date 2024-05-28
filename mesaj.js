/* firabasee */



  /*   Import the functions you need from the SDKs you need */
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCqfJwLRxSk5xnrwTAMFbc_mMDQ0RBYPqs",
    authDomain: "firabasemessagewebb.firebaseapp.com",
    projectId: "firabasemessagewebb",
    storageBucket: "firabasemessagewebb.appspot.com",
    messagingSenderId: "1059293399136",
    appId: "1:1059293399136:web:8012799333e664c2625b05",
    measurementId: "G-VWZ1WQEBP9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  

/* kayıt olma bölümü */
/* kullanıcı ismini yazdırmak */
var kadı=localStorage.getItem("namee");
var ismim=document.getElementById("nad").innerHTML=kadı
var gg=document.getElementById("görm");



/* mesaj gönderme  */


function gndr(){



  var kmes=document.createElement("p");
  kmes.id="nad"
  var bbşlk=document.createElement("br");

  var mesajım= document.getElementById("yazz").value;

  kmes.textContent=ismim+":"+" "+mesajım;

  gg.appendChild(kmes)
  gg.appendChild(bbşlk)
  
     document.getElementById("yazz").value="";
}


window.addEventListener("scroll",function(){
  var gg=document.getElementById("görm");

})


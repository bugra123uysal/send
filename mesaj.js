




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
gg.scrollTop=gg.scrollHeight

  
}





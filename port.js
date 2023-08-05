Email.send({
    Host : "smtp.gmail.com",
    Username : "DevHusayn",
    Password : "password",
    To : 'husaynmubarak0@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Message from my portfolio",
    Body : "Name: " + document.getElementById("name").value
         + "<br> Email: " + document.getElementById("email").value
         + "<br> Phone no: " + document.getElementById("number").value
         + "<br> Message: " + document.getElementById("messafe").value

}).then(
  message => alert("message sent successfully")
);
lightMode = () => {
  const light = document.body;
  light.classList.toggle("darktheme")
}

    
   var hideContent = document.getElementById("c-home");
   hideContent.onclick = () => {
     document.getElementById("ul").style.display = "none";
     if(document.getElementById("ul").style.display.contains("none")){
        ul.style.display = "none";
     }else{
        ul.style.display = "block";
     }



   }
   let number1 = document.querySelector("#number1");
   let counter = 0;
   setInterval(()=> {
    if (counter == 98){
      clearInterval();
    }else{
      counter += 1;
      number1.innerHTML = counter + "%";
    }
   }, 2000);

   let number2 = document.getElementById("number2");
   let counter2 = 0;
   setInterval(()   => {
    if (counter2 == 92){
      clearInterval();
    }else{
      counter2 += 1;
      number2.innerHTML = counter2 + "%";
    }
   }, 20);
   function increaseHeight() {
    document.querySelector(".grid").style.height="400px";
   }
   let counts = setInterval(updated);
   let upto = 0;
   function updated (){
    let counts=document.getElementById("number1");
    counts.innerHTML = ++upto;
    if (upto === 98){
      clearInterval(counts)
    }
   }

   
 
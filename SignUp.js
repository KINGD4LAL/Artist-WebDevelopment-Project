
window.onload = () =>(
  document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
  alert(email + "," +name);
  let error = "";

  if(email === null || email === "" ||  name=== null || name === ""){
    error += ("Your email and name are required");
   }
  else{
      let re_email = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])*$/;
      let re_name = /^[a-zA-Z\s\,\.\-]{6,32}$/

      let email_valid = re_email.test(email);
      let name_valid = re_name.test(name);
     

      if(!email_valid || !name_valid){
        alert("Your email or name was invalid")
        
        
      }
      else{
        console.log("Sending to server...");
      }
    }
    const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist";
      const data = {
        "name": name,
        "email": email
      };
    console.table(data);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if(response.status === 200){
        return response.json();}
      else if(response.status === 400){
        throw "Bad data was sent to the server";}
      else {
        throw "Something went wrong";
      }
    })
    .then(() => {
      alert("email and name has been added");
    })
    .catch((error) => {
      alert(error);
    })
})
);



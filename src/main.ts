
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dataForm") as HTMLFormElement;
  const responseText = document.getElementById("response") as HTMLElement;
  const email = (document.getElementById("email") as HTMLInputElement);
  const password = (document.getElementById("password") as HTMLInputElement);
    
  
  form.addEventListener("submit", async (event) => {
    event.preventDefault();


    //const textarea = (document.getElementById("Message") as HTMLInputElement).value;
    try{
      console.log("test")
      const response = await fetch("https://iia-front.onrender.com/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:email.value, password:password.value}),
      });

      const result = await response.json();
      responseText.innerText = `Réponse du serveur : ${JSON.stringify(result)}`;
      }catch (error){
        responseText.innerText = "Erreur lors de l'envoie des données";
      }
  })

  email?.addEventListener('input', function(e:any){
    
    setTimeout(() => {

        // après 10 secondes ce qui est dans le corps de cette fonction
        // va s'exécuter
        fetch('https://iia-front.onrender.com/api/data', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ email: e.target.value })
        })

    }, 100)

})


password.addEventListener('input', function(e:any){

    fetch('https://iia-front.onrender.com/api/data', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ password : e.target.value })
    })

})

});


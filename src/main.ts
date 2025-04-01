
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dataForm") as HTMLFormElement;
  const responseText = document.getElementById("response") as HTMLElement;

    form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    //const textarea = (document.getElementById("Message") as HTMLInputElement).value;
    try{
      console.log("test")
      const response = await fetch("http://localhost:3001/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
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
        fetch('http://localhost:3001/api/data', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ email: e.target.value })
        })

    }, 100)

})


password.addEventListener('input', function(e:any){

    fetch('http://localhost:3001/api/data', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ password : e.target.value })
    })

})

});


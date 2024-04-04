// Add your code here
function submitData(userName, userEmail){
   return  fetch ("http://localhost:3000/users", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body : JSON.stringify({
            name : userName,
            email : userEmail
        })
    })

       .then(function (response) {
        return response.json() 
        })
       .then(function (newObj){
           const body = document.querySelector("body")
           const div = document.createElement("div")
           div.innerHTML = newObj.id 
           body.appendChild(div) 
        })

        .catch(function(error){

            const body = document.querySelector("body")
            const div = document.createElement("div")
            div.innerHTML = error
            body.appendChild(div)
        })
    
}

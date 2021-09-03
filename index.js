
const userUrl = 'http://localhost:3000/users'

let data = { 
    name: "Steve", 
    email: "steve@steve.com"
}

const postObject = {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(data)
}


function submitData() {
return fetch(userUrl, postObject)
.then(response => response.json())
.then(getId)
.catch(errorMessage)
}

function getId(object) {   
    document.body.innerHTML = object.id
}

function errorMessage(error) {
    document.body.innerHTML = error.message
}


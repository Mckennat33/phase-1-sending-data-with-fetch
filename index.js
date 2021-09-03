// Add your code here

const userURL = 'http://localhost:3000/users' 

let bodyData = { 
    name: "Steve", 
    email: "steve@steve.com"
}

const postObject = {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
}

function submitData() {
    return fetch(userURL, postObject)
    .then(response => response.json())
    .then(getID)
    .catch(errorFunc)
}

const bodyTag = document.querySelector('body')

function getID(object) {
    document.body.innerHTML = object.id
}

function errorFunc(error) {
    document.body.innerHTML = error.message
};
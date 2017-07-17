
// FETCH?! :O 
fetch('http://localhost:3000/api/submissions')
.then((response)=> { 
    response.json()
    .then(function(data) {  
      console.log(data)
    })
})
const axios = require('axios')

const getData = () => {
    axios.get('https://reqres.in/api/users?page=1').then(response => {
        console.log(response.data)
})}

const sentData = () => {
    axios
     .post('https://reqres.in/api/users', {
        name: 'Guilherme',
        job: 'IT'
     }, {
        headers: {
            'Content-Type': 'application/json'
        }
     })
     .then(response => {
         console.log(response.data)
     })
     .catch(erro => {
         console.log(erro)
     })
}    

sentData()
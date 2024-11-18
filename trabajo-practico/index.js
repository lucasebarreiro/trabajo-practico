const axios = require('axios');

const url = 'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';

    axios.get(url)
    .then((response) => {
        console.log('Datos recibidos:', response.data)
    })
    .catch((error)=>{
        console.log('Error al obtener datos', error.message)
    });

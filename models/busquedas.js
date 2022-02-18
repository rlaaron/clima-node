const axios = require('axios');


class Busquedas {

    historial = ['a'];
    
    
    constructor(){
     //todo: leer DB si existe
    }


    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiYWFyb25ybDAzIiwiYSI6ImNrenJteWVlOTA1N3oybnAzdjdmeHJydjYifQ.3MngGf9HFzoF56uRvydiyg',
            'limit': 5,
            'language': 'es'
        }
    }
    async ciudad( lugar = '' ) {
        try {
            //peticion http
            //console.log(lugar);
            const instance =  axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });   
            const resp = await instance.get();
            console.log(resp.data);

            return [];//retornar los lugares
            
        } catch (error) {
            return [];
        }
    }    


}

module.exports = Busquedas;
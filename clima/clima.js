const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=71560be675a981833af8d16fee15472f&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
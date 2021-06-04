const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=352ba9a5888166e9af9285dcd3291989&query=${latitude},${longitude}&units=f`
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // put in URL for weatherstack
            callback(undefined, 'It is ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. There is a ' + body.current.precip + '% chance of rain today.')
        }
    })

}

module.exports = forecast
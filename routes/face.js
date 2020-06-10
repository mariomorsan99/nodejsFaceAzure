var express = require('express');
var app = express();

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '04ad4d9760214df783b2888ed4bbe9bc';
const uriBase = 'https://facedetectortest.cognitiveservices.azure.com/face/v1.0/detect';
const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';

// Request parameters.
const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': subscriptionKey
    }
};


app.get('/', (request, resp, next) => {

    promesa: Promise = CallFace();




    resp.status(200).json({
        mensaje: 'peticion correcta',
        ok: true
    });
});



function CallFace() {
    console.log('funcion');
    var result;
    request.post(options, (error, response, body) => {

        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        result = jsonResponse;
        console.log('JSON Response\n');
        console.log(jsonResponse);

    });

    return result;

}


//Rutas


module.exports = app;
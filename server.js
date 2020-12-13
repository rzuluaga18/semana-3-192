const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/index');
const bodyPArser = require('body-parser');
const cors = require('cors');


//instancia de express 
const app = express();

//cors
app.use(cors());


app.use((req,res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods: GET,POST,DELETE');
    next();
})



//middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({extended:true}));

// manejador  para la primera ruta
// todos los manejadores tiene este pformato de request y response
app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);

// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;
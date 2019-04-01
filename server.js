require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
// const db = require('./models');

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

app.use(routes);

//true drops tables at startup, false will create if not extant
var syncOptions = { force: false };


if( process.env.NODE_ENV === 'test'){
    syncOptions.force = true;
}

// db.sequelize.sync(syncOptions).then(function() {
//     app.listen(PORT, function(){
//         console.log(`App listening on PORT ${PORT}`);
//     });
// });

app.listen(PORT, function(){
    console.log(`connect test, listening on port ${PORT}`)
})
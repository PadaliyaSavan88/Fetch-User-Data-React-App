let express = require('express');
let bodyParser = require('body-parser');
let PORT = 8000
let cors = require('cors')

let app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/getBrowserDetails', function (request, response) {
    response.json({...request.body.data.user_data})
})

app.listen(PORT,() => {
    console.log(`Magic Happens at port ${PORT}`)
})
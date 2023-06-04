const express = require('express');
const app = express();
const port = 3000;

/*app.listen(3000);*/

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('It works');
});

app.listen(port, () => {
    console.log(`Servidor web iniciado en http://localhost:${port}`);

});
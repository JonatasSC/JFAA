const express = require("express")
const routes = require("./src/routes")
const app = express()
const path = require("path")
const port = 3004

app.set('views', path.join(__dirname, 'views'))
app.use(express.static('assets'))
app.set('view engine', 'ejs')


async function startServer() {
  try {

    routes(app)

    app.get('/', (req, res) => {
      res.render('index', req.query)
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    })

  } catch (error) {
    console.error("Erro  ao inicializar o servidor. ", error)
  }
}

startServer();

/* app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
}); */

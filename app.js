const express = require("express")
const routes = require("./src/routes")
const app = express()
const port = 3004

async function startServer () {
  try {

    routes(app)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

  } catch (error) {
    console.error("Erro  ao inicializar o servidor. ",error)
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
